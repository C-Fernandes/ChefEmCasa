package com.back.chef_em_casa_back.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.back.chef_em_casa_back.entity.Ingredient;
import com.back.chef_em_casa_back.repository.IngredientRepository;

@Service
public class IngredientService {
    @Autowired
    private IngredientRepository ingredientRepository;

    public Ingredient findByName(String name) {
        return ingredientRepository.findById(name).orElse(null);
    }

    Ingredient save(String name) {
        throw new UnsupportedOperationException("Not supported yet.");
    }

}
