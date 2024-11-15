package com.back.chef_em_casa_back.dto;
public record IngredientRecipeDTO(
    Long id,
    double quantity,
    String unit,
    IngredientDTO ingredient,  // DTO para o ingrediente
    RecipeDTO recipe           // DTO para a receita
) {}