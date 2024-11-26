package com.back.chef_em_casa_back.entity;

import java.util.ArrayList;
import java.util.List;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;

@Entity
public class Labels {
    @Id
    private String name;

     @OneToMany(mappedBy = "label")
    private List<RecipeLabel> recipeLabels = new ArrayList<>();

}
