package com.back.chef_em_casa_back.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.back.chef_em_casa_back.entity.IngredientRecipe;

public interface IngredientRecipeRepository extends JpaRepository<IngredientRecipe, Long> {

}
