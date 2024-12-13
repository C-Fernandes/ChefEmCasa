package com.back.chef_em_casa_back.service;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
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
    private String uploadDir;
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
        // Cria um nome único para o arquivo (exemplo: timestamp + nome original)
        String filename = System.currentTimeMillis() + ".png"; // ou ".jpg" se for uma imagem JPEG
        Path filePath = Paths.get(uploadDir, filename);

        // Salva o arquivo no diretório configurado
        Files.write(filePath, imageBytes);

        // Retorna o caminho relativo ou o nome do arquivo para armazenar no banco
        return filePath.toString(); // Ou apenas filename se for o caminho relativo
    }

    public void delete(Recipe recipe) {
        recipeRepository.delete(recipe);
    }

}
