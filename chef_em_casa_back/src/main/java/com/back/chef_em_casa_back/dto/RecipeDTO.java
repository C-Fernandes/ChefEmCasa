package com.back.chef_em_casa_back.dto;

import java.util.List;

public record RecipeDTO(
    Long id,
    String name,
    String description,
    int preparationTimeMinutes,
    int performance,
    List<AvaliationDTO> avaliacoes,  // DTO específico para Avaliation
    List<IngredientRecipeDTO> ingredientRecipe,  // DTO específico para IngredientRecipe
    UserDTO author  // DTO específico para User (Autor da receita)
) {}