import React, { useState, useEffect } from "react";
import useForm from "../hooks/UseForm";
import useSubmit from "../hooks/UseSubmit";
import useFetch from "../hooks/UseFetch";

function RecipeModal({ onClose }) {
  const [formValues, handleChange, reset] = useForm({
    title: "",
    description: "",
    preparationTime: "",
    preparationMode: "",
    categories: [],
    ingredients: [],
  });
  const apiUrl = "recipe/register";
  const [isVisible, setIsVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [newIngredient, setNewIngredient] = useState({
    quantity: "",
    unit: "",
    name: "",
  });
  const [image, setImage] = useState(null);
  const Measure = {
    GRAM: "g", // Gramas
    KILOGRAM: "kg", // Quilogramas
    MILLILITER: "ml", // Mililitros
    LITER: "L", // Litros
    CUP: "cup", // Xícaras
    TABLESPOON: "tbsp", // Colheres de sopa
    TEASPOON: "tsp", // Colheres de chá
    POUND: "lb", // Libras
    OUNCE: "oz", // Onças
    DASH: "dash", // Pitadas
    PINCH: "pinch", // Pincadas
    UNIT: "unidade", // Unidade genérica (por exemplo, uma peça de fruta)
    XICARA: "xicara", // Xícara
    COPO: "copo", // Copo
    COLHER_SOPA: "colher de sopa", // Colher de sopa
    COLHER_CHA: "colher de chá", // Colher de chá
    LATA: "lata", // Lata
    POTE: "pote", // Pote
    LINGUA: "lingua", // Língua
    GARRAFA: "garrafa", // Garrafa
    FRUTA: "fruta", // Unidade genérica de fruta
    CAIXA: "caixa", // Caixa
  };

  const [selectedCategories, setSelectedCategories] = useState([]);
  const {
    data: dataFetch,
    error: errorFetch,
    loading: loadingFetch,
  } = useFetch("labels/");

  const filteredCategories = dataFetch
    ? dataFetch.filter((category) =>
        category.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const { dataSubmit, loadingSubmit, errorSubmit, submit } = useSubmit(
    apiUrl,
    "POST",
    "recipeDTO",
    "multipart/form-data"
  );
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formValues.title ||
      !formValues.description ||
      !formValues.preparationTime
    ) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    const formData = {
      name: formValues.title,
      description: formValues.description,
      preparationTimeMinutes: formValues.preparationTime,
      performance: formValues.preparationMode,
      author: localStorage.getItem("userEmail"), // Ajuste conforme necessário
      ingredients: formValues.ingredients,
    };

    // Se a imagem foi selecionada, codifica em Base64
    if (image) {
      const reader = new FileReader();
      reader.onloadend = async () => {
        formData.image = reader.result; // A imagem codificada em Base64
        // Envia a requisição para o backend
        try {
          const response = await fetch(
            "http://localhost:8080/recipe/register",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(formData),
            }
          );

          if (!response.ok) {
            throw new Error("Erro ao enviar a receita!");
          }

          const data = await response.json();
          alert("Receita adicionada com sucesso!");
        } catch (error) {
          console.error("Erro:", error);
          alert("Erro ao enviar a receita!");
        }
      };
      reader.readAsDataURL(image); // Lê a imagem como Data URL (Base64)
    }
  };

  const handleAddIngredient = () => {
    if (newIngredient.quantity && newIngredient.name) {
      handleChange({
        target: {
          name: "ingredients",
          value: [...formValues.ingredients, newIngredient],
        },
      });
      setNewIngredient({ quantity: "", unit: "", name: "" });
    } else {
      alert("Preencha todos os campos do ingrediente.");
    }
  };

  const handleCategorySelect = (categoryName) => {
    setSelectedCategories((prevSelectedCategories) => {
      if (prevSelectedCategories.includes(categoryName)) {
        return prevSelectedCategories.filter((name) => name !== categoryName);
      } else {
        return [...prevSelectedCategories, categoryName];
      }
    });
    console.log(selectedCategories);
  };
  useEffect(() => {
    if (dataSubmit) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [dataSubmit, onClose]);

  return (
    <div
      className={`modal-overlay ${isVisible ? "visible" : ""}`}
      onClick={onClose}
    >
      <div
        className="modal-content modal-recipe"
        onClick={(e) => e.stopPropagation()}
      >
        <h2>Crie uma nova receita!</h2>
        <form onSubmit={handleSubmit}>
          <div className="upload-container">
            <input
              type="file"
              id="fileInput"
              className="file-input"
              accept="image/*"
              onChange={handleImageChange}
            />
            <label htmlFor="fileInput" className="upload-label">
              <i className="fi fi-rr-download"></i>
              <p>Insira uma imagem do prato pronto!</p>
            </label>
          </div>
          <div>
            <label htmlFor="title">Título</label>
            <input
              className="input"
              type="text"
              id="title"
              name="title"
              value={formValues.title}
              placeholder="Insira o título da receita"
              onChange={handleChange}
              required
            />
          </div>
          <div className="description">
            <label htmlFor="description">Descrição</label>
            <textarea
              id="description"
              name="description"
              className="input"
              value={formValues.description}
              placeholder="Descreva a receita"
              onChange={handleChange}
              required
            />
          </div>
          <div className="ingredients">
            <label>Ingredientes</label>
            <div className="ingredients-labels">
              <input
                className="input"
                type="text"
                placeholder="Quantidade"
                value={newIngredient.quantity}
                onChange={(e) =>
                  setNewIngredient({
                    ...newIngredient,
                    quantity: e.target.value,
                  })
                }
              />
              <select
                className="input"
                value={newIngredient.unit}
                onChange={(e) =>
                  setNewIngredient({ ...newIngredient, unit: e.target.value })
                }
              >
                <option value="">Unidade</option>
                {Object.keys(Measure).map((key) => (
                  <option key={key} value={Measure[key]}>
                    {Measure[key]}
                  </option>
                ))}
              </select>

              <input
                className="input"
                type="text"
                placeholder="Nome do ingrediente"
                value={newIngredient.name}
                onChange={(e) =>
                  setNewIngredient({ ...newIngredient, name: e.target.value })
                }
              />
              <button type="button" onClick={handleAddIngredient}>
                +
              </button>
            </div>
            <ul className="selected-ingredients">
              {formValues.ingredients.map((ingredient, index) => (
                <li key={index}>
                  {ingredient.quantity} {ingredient.unit} {ingredient.name}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <label htmlFor="preparationTime">Tempo de preparo (minutos)</label>
            <input
              className="input"
              type="number"
              id="preparationTime"
              name="preparationTime"
              value={formValues.preparationTime}
              placeholder="Insira o tempo de preparo"
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="preparationMode">Modo de preparo</label>
            <textarea
              id="preparationMode"
              className="input"
              name="preparationMode"
              value={formValues.preparationMode}
              placeholder="Insira o modo de preparo"
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Etiquetas/Categorias</label>
            <input
              type="text"
              placeholder="Pesquisar etiquetas..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="input"
            />
            <div className="categories">
              {loadingFetch && <p>Carregando...</p>}
              {errorFetch && <p>Erro ao carregar categorias: {errorFetch}</p>}
              {selectedCategories.length > 0 && (
                <div className="selected-categories">
                  {selectedCategories.map((categoryName) => (
                    <button
                      key={categoryName}
                      type="button"
                      className="selected"
                      onClick={() => handleCategorySelect(categoryName)}
                    >
                      {categoryName}
                    </button>
                  ))}
                </div>
              )}

              {/* Exiba as categorias filtradas */}
              {searchTerm && filteredCategories.length > 0 && (
                <div className="filtered-categories">
                  {filteredCategories
                    .filter(
                      (category) => !selectedCategories.includes(category.name)
                    )
                    .map((category) => (
                      <button
                        key={category.name}
                        type="button"
                        className=""
                        onClick={() => handleCategorySelect(category.name)}
                      >
                        {category.name}
                      </button>
                    ))}
                </div>
              )}

              {searchTerm && filteredCategories.length === 0 && (
                <p>Nenhuma etiqueta encontrada.</p>
              )}
            </div>
          </div>
          <div className="buttons-recipe-modal">
            <button type="submit" disabled={loadingSubmit}>
              {loadingSubmit ? "Enviando..." : "Salvar"}
            </button>
            <button onClick={onClose}>Cancelar</button>
          </div>
        </form>

        {errorSubmit && <p className="error">Erro: {errorSubmit.message}</p>}
        {dataSubmit && (
          <p className="success">Receita adicionada com sucesso!</p>
        )}
      </div>
    </div>
  );
}

export default RecipeModal;
