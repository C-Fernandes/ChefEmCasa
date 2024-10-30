package com.back.chef_em_casa_back.entity;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.Column;
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
public class User {
    @Id
    private String email;
    @Column
    private String password;
    @Column
    private String name;

    @OneToMany(mappedBy = "user")
    private List<Avaliation> avaliations = new ArrayList<>();

    @OneToMany(mappedBy = "author")
    private List<Recipe> recipes = new ArrayList<>();

}
