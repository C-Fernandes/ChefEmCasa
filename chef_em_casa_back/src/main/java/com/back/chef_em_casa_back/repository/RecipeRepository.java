package com.back.chef_em_casa_back.repository;

import com.back.chef_em_casa_back.entity.Recipe;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RecipeRepository extends JpaRepository<Recipe, Long> {}
