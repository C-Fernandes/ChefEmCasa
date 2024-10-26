-- Active: 1729886191272@@localhost@3307
package com.back.chef_em_casa_back.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Ingredient {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(nullable = false)
    private String nae;

    @Column
    private String description;

    @Column
    private double quantity;

    @Column
    private String unit;

    // Construtor padrão
    public Ingredient() {
    }

    // Construtor com parâmetros
    public Ingredient(String name, String description, double quantity, String unit) {
        this.nae = name;
        this.description = description;
        this.quantity = quantity;
        this.unit = unit;
    }

    // Getters e Setters
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return nae;
    }

    public void setName(String name) {
        this.nae = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public double getQuantity() {
        return quantity;
    }

    public void setQuantity(double quantity) {
        this.quantity = quantity;
    }

    public String getUnit() {
        return unit;
    }

    public void setUnit(String unit) {
        this.unit = unit;
    }
}
