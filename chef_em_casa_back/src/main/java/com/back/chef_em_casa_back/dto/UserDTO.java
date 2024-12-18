package com.back.chef_em_casa_back.dto;

import java.util.Date;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonFormat;

public record UserDTO(
        String email,
        String name,
        String password,

        @JsonFormat(pattern = "yyyy-MM-dd") // Adiciona a anotação para formatar a data
        Date birthDate,

        List<AvaliationDTO> avaliations, // DTO específico para Avaliation
        List<RecipeDTO> recipes // DTO específico para Recipe
) {
}