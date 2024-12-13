package com.back.chef_em_casa_back.controller;

import java.util.ArrayList;
import java.util.Base64;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.back.chef_em_casa_back.dto.RecipeDTO;
import com.back.chef_em_casa_back.entity.Ingredient;
import com.back.chef_em_casa_back.entity.Recipe;
import com.back.chef_em_casa_back.service.RecipeService;

@RestController
@RequestMapping("/recipe")
public class RecipeController {

    @Autowired
    private RecipeService recipeService;

    @GetMapping("/")
    public ResponseEntity<List<Recipe>> findAll() {

        try {
            List<Recipe> recipes = recipeService.findAll();
            return ResponseEntity.ok(recipes);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(Collections.emptyList());

        }
    }

    @PostMapping(value = "/register", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Optional<Recipe>> save(@RequestBody RecipeDTO recipeDTO) {
        try {
            // Decodifique a imagem Base64 se necessário
            byte[] imageBytes = null;
            if (recipeDTO.image() != null) {
                imageBytes = Base64.getDecoder().decode(recipeDTO.image().split(",")[1]);
            }

            // Transformar RecipeDTO em Recipe
            Recipe recipe = new Recipe(recipeDTO.name(), recipeDTO.description(),
                    recipeDTO.preparationTimeMinutes(), recipeDTO.performance());

            // Salvar receita
            Recipe savedRecipe = recipeService.save(recipe, recipeDTO.author(),
                    recipeDTO.ingredients(), imageBytes);

            return ResponseEntity.ok(Optional.of(savedRecipe));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(Optional.empty());
        }
    }

}
