package com.back.chef_em_casa_back.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.back.chef_em_casa_back.entity.Recipe;
import com.back.chef_em_casa_back.entity.User;

@Repository
public interface RecipeRepository extends JpaRepository<Recipe, Long> {

    List<Recipe> findByAuthor(Optional<User> user);
}
