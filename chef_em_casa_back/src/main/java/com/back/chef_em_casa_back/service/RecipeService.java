package com.back.chef_em_casa_back.service;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.back.chef_em_casa_back.dto.IngredientDTO;
import com.back.chef_em_casa_back.entity.Ingredient;
import com.back.chef_em_casa_back.entity.Recipe;
import com.back.chef_em_casa_back.entity.User;
import com.back.chef_em_casa_back.repository.RecipeRepository;

import io.jsonwebtoken.io.IOException;

@Service
public class RecipeService {

    private final String uploadDir = "uploads";
    @Autowired
    private RecipeRepository recipeRepository;

    @Autowired
    private UserService userService;

    @Autowired
    private IngredientService ingredientService;

    @Autowired
    private IngredientRecipeService ingredientRecipeService;

    public List<Recipe> findAll() {
        return recipeRepository.findAll();
    }

    public Recipe save(Recipe recipe, String author, List<IngredientDTO> ingredientsDTO, byte[] imageBytes) {
        // Encontra o usuário autor da receita
        Optional<User> user = userService.findById(author);
        User actualUser = user.orElseThrow(() -> new RuntimeException("User not found"));

        try {
            // Processa e salva a imagem se fornecida
            if (imageBytes != null && imageBytes.length > 0) {
                String imagePath = saveImage(imageBytes); // Método que processa e salva a imagem
                recipe.setImageUrlString(imagePath); // Salva o caminho da imagem na receita
            }

            // Salva a receita no banco de dados
            recipe = recipeRepository.save(recipe);
            recipe.setAuthor(actualUser); // Associa o usuário à receita

            // Processa os ingredientes e os salva
            for (IngredientDTO ingredientDTO : ingredientsDTO) {
                Ingredient ingredient = ingredientService.findByName(ingredientDTO.name());
                if (ingredient == null) {
                    ingredient = ingredientService.save(ingredientDTO.name());
                }
                ingredientRecipeService.save(recipe, ingredient, ingredientDTO.quantity(), ingredientDTO.measure());
            }

            return recipe;
        } catch (Exception e) {
            delete(recipe); // Exclui a receita em caso de erro
            throw new RuntimeException("Erro ao salvar a receita: " + e.getMessage());
        }
    }

    private String saveImage(byte[] imageBytes) throws IOException, java.io.IOException {
        String filename = System.currentTimeMillis() + ".png";
        Path filePath = Paths.get(uploadDir, filename);
        Files.createDirectories(filePath.getParent());
        Files.createDirectories(Paths.get(uploadDir));
        Files.write(filePath, imageBytes);
        System.out.println("Salvando arquivo em: " + filePath.toAbsolutePath());
        return filePath.toString();
    }

    public void delete(Recipe recipe) {
        recipeRepository.delete(recipe);
    }

    public List<Recipe> findByEmail(String email) {
        Optional<User> user = userService.findById(email);
        if (user.isPresent()) {
            return recipeRepository.findByAuthor(user);
        }
        return Collections.emptyList();
    }

}
