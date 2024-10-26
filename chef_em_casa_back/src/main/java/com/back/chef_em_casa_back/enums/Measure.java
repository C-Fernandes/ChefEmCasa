package com.back.chef_em_casa_back.enums;

public enum Measure {
    GRAM("g"),                 // Gramas
    KILOGRAM("kg"),            // Quilogramas
    MILLILITER("ml"),          // Mililitros
    LITER("L"),                // Litros
    CUP("cup"),                // Xícaras
    TABLESPOON("tbsp"),        // Colheres de sopa
    TEASPOON("tsp"),           // Colheres de chá
    POUND("lb"),               // Libras
    OUNCE("oz"),               // Onças
    DASH("dash"),              // Pitadas
    PINCH("pinch"),            // Pincadas
    UNIT("unit");              // Unidade genérica (por exemplo, uma peça de fruta)

    private final String symbol;

    Measure(String symbol) {
        this.symbol = symbol;
    }

    public String getSymbol() {
        return symbol;
    }
}

