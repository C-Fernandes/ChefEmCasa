package com.back.chef_em_casa_back.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.back.chef_em_casa_back.entity.Ingredient;
import com.back.chef_em_casa_back.entity.IngredientRecipe;
import com.back.chef_em_casa_back.entity.Recipe;
import com.back.chef_em_casa_back.repository.IngredientRecipeRepository;

@Service
public class IngredientRecipeService {

    @Autowired
    private IngredientRecipeRepository ingredientRecipeRepository;

    public IngredientRecipe save(Recipe recipe, Ingredient ingredient, Double quantity, String unit) {
        return ingredientRecipeRepository.save(new IngredientRecipe(quantity, unit, ingredient, recipe));
    }

}
