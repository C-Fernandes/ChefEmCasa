package com.back.chef_em_casa_back.entity;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Ingredient {

    @Id
    private String name;

    @OneToMany(mappedBy = "ingredient")
    private List<IngredientRecipe> IngredientRecipe = new ArrayList<>();

}
