package com.back.chef_em_casa_back.dto;

import java.util.List;

public record RecipeDTO(
    Long id,
    String name,
    String description,String imageUrlString, 
    int preparationTimeMinutes,
    int performance,// DTO específico para Avaliation
    List<String> ingredients,  // DTO específico para IngredientRecipe
    UserDTO author  // DTO específico para User (Autor da receita)
) {}