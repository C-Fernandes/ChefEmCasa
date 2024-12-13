package com.back.chef_em_casa_back.dto;

import java.util.List;

public record RecipeDTO(
                Long id,
                String name,
                String description,
                int preparationTimeMinutes,
                String performance, // DTO específico para Avaliation
                List<IngredientDTO> ingredients, // DTO específico para IngredientRecipe
                String author, String image) {
}