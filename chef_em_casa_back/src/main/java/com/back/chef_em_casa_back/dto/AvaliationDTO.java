package com.back.chef_em_casa_back.dto;

public record AvaliationDTO(
    Long id,
    String comentario,
    UserDTO user,  // DTO para o usuário que fez a avaliação
    RecipeDTO recipe  // DTO para a receita avaliada
) {}
