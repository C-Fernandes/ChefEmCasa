import React, { useState } from "react";

function AsideFilter(props) {

    const [ingredients, setIngredients] = useState([]); // lista de ingredientes digitado pelo usuário
    const [inputValue, setInputValue] = useState(""); // controla o texto do input
    const [selectedCategory, setSelectedCategory] = useState(-1); // Estado (índice) da categoria selecionada
    const [selectedSort, setSelectedSort] = useState(0);

    const categories = [
        "Massa",
        "Sopas e caldos",
        "Carne",
        "Aves",
        "Mexicana",
        "Vegano",
        "Frutos do mar",
        "Salada",
        "Bebida",
    ];

    const sorting = [
        "Nome",
        "Data de publicação",
        "Mais curtidos"
    ];

    const handleAddIngredient = () => {
        if (inputValue.trim() !== "" && !ingredients.includes(inputValue.trim())) {
            setIngredients([...ingredients, inputValue.trim()]);
            setInputValue("");
        }
    };

    const handleRemoveIngredient = (index) => {
        setIngredients(ingredients.filter((_, i) => i !== index));
    };

    const handleSelectedCategory = (index) => {
        if (index == selectedCategory) setSelectedCategory(-1); // -1 para nenhuma categoria selecionada
        else setSelectedCategory(index);
    }

    const clearAll = () => {
        setIngredients([]);
        setSelectedCategory(-1);
        setSelectedSort(0);
    }

    return (
        <aside className="filter">
            <h3>Filtrar por:</h3>
            <div>
                <div className="filter-section">
                    <h4>Ingredientes</h4>
                    <div className="input-content">
                        <input
                            className="input"
                            type="text"
                            placeholder="Nome do ingrediente"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                        />
                        <button onClick={handleAddIngredient}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M454.04-454.54H228.08v-51.92h225.96v-225.96h51.92v225.96h225.96v51.92H505.96v225.96h-51.92v-225.96Z" /></svg>
                        </button>
                    </div>
                    <div className="options">
                        {ingredients.map((ingredient, index) => (
                            <div className="option marked">
                                <span>{ingredient}</span>
                                <span className="btn" onClick={() => handleRemoveIngredient(index)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" width="16px" fill="#FFFFFF"><path d="m294-246-47-48 185-186-185-186 47-48 186 186 186-186 47 48-185 186 185 186-47 48-186-186-186 186Z" /></svg>
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="filter-section">
                    <h4>Categoria</h4>
                    <div className="options">
                        {categories.map((category, index) => (
                            <button key={index} onClick={() => handleSelectedCategory(index)} className={selectedCategory == index ? "option marked" : "option"}>{category}</button>
                        ))}
                    </div>
                </div>
            </div>

            <h3>Ordenar por:</h3>
            <div>
                <div className="filter-section">
                    <div className="options">
                        {sorting.map((sort, index) => (
                            <button key={index} onClick={() => setSelectedSort(index)} className={selectedSort == index ? "option marked" : "option"}>{sort}</button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="options buttons">
                <button onClick={() => clearAll()} className="simple-button cancel-button">Limpar</button>
                <button id="filter-button" className="simple-button">Filtrar</button>
            </div>
        </aside>
    );
}

export default AsideFilter;
