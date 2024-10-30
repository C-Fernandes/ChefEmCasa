package com.back.chef_em_casa_back.entity;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.Column;
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

    @Column
    private String name;

    @Column
    private String description;

    @Column
    private int preparationTimeMinutes;

    @Column
    private int performance;

    @OneToMany(mappedBy = "recipe")
    private List<IngredientRecipe> ingredientRecipe = new ArrayList<>();

    @OneToMany(mappedBy = "recipe")
    private List<Avaliation> avaliacoes = new ArrayList<>();

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User author;

}
