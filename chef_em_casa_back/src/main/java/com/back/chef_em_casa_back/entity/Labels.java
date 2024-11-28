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
public class Labels {
    @Id
    private String name;

     @OneToMany(mappedBy = "label")
    private List<RecipeLabel> recipeLabels = new ArrayList<>();

}
