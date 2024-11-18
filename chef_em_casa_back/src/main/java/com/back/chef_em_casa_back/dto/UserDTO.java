package com.back.chef_em_casa_back.dto;

import java.util.List;
import java.util.Date;

public record UserDTO(
    String email,
    String name, String password, Date birthDate,
    List<AvaliationDTO> avaliations, // DTO específico para Avaliation
    List<RecipeDTO> recipes           // DTO específico para Recipe
) {};