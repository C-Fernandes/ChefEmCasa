package com.back.chef_em_casa_back.entity;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
public class Recipe {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String description;
    private String imageUrlString;
    private int preparationTimeMinutes;
    private String preparation;

    @OneToMany(mappedBy = "recipe")
    private List<IngredientRecipe> ingredientRecipe = new ArrayList<>();

    @OneToMany(mappedBy = "recipe")
    private List<Avaliation> avaliacoes = new ArrayList<>();
    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User author;

    @OneToMany(mappedBy = "recipe", cascade = CascadeType.ALL)
    private List<RecipeLabel> recipeLabels = new ArrayList<>();

    public Recipe(String name, String description, int preparationTimeMinutes, String preparation) {
        this.name = name;
        this.description = description;
        this.preparationTimeMinutes = preparationTimeMinutes;
        this.preparation = preparation;
    }

}
