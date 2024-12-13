package com.back.chef_em_casa_back.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class IngredientRecipe {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private double quantity;
    private String unit;

    @ManyToOne
    @JoinColumn(name = "ingredient_id")
    private Ingredient ingredient;

    @ManyToOne
    @JoinColumn(name = "recipe_id")
    private Recipe recipe;

    public IngredientRecipe(Double quantity, String unit) {

        this.quantity = quantity;
        this.unit = unit;
    }

    public IngredientRecipe(double quantity, String unit, Ingredient ingredient, Recipe recipe) {

        this.quantity = quantity;
        this.unit = unit;
        this.ingredient = ingredient;
        this.recipe = recipe;
    }

}
