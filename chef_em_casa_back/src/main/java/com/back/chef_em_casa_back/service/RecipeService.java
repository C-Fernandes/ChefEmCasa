package com.back.chef_em_casa_back.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.back.chef_em_casa_back.entity.Recipe;
import com.back.chef_em_casa_back.repository.RecipeRepository;

@Service
public class RecipeService {

    @Autowired
    private RecipeRepository recipeRepository;

    public List<Recipe> findAll() {
        return recipeRepository.findAll();  }
    
}
