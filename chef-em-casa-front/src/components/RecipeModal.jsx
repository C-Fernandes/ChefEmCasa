import React, { useState, useEffect } from 'react';
import useForm from '../hooks/UseForm';
import useSubmit from '../hooks/UseSubmit'; // Supondo que useSubmit seja seu hook de envio

function RecipeModal({ onClose }) {
  const [formValues, handleChange, reset] = useForm({
    title: '',
    description: '',
    prepTime: '',
    instructions: '',
    categories: [], // Categorias como 'Massa', 'Carne', etc.
  });

  const [ingredients, setIngredients] = useState([]); // Lista de ingredientes
  const [newIngredient, setNewIngredient] = useState({ quantity: '', unit: '', name: '' });
  const apiUrl = 'recipe/create';
  const { data, loading, error, submit } = useSubmit(apiUrl);

  const handleIngredientChange = (e) => {
    const { name, value } = e.target;
    setNewIngredient((prev) => ({ ...prev, [name]: value }));
  };

  const addIngredient = () => {
    if (!newIngredient.name) {
      alert('Por favor, insira o nome do ingrediente.');
      return;
    }
    setIngredients((prev) => [...prev, newIngredient]);
    setNewIngredient({ quantity: '', unit: '', name: '' }); // Limpa os campos
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formValues.title || !formValues.instructions || !ingredients.length) {
      alert('Por favor, preencha os campos obrigatórios e adicione pelo menos um ingrediente.');
      return;
    }

    const payload = {
      ...formValues,
      ingredients,
    };

    submit(payload); // Envia os dados da receita
  };

  useEffect(() => {
    if (data) {
      const timer = setTimeout(() => {
        onClose(); // Fecha o modal
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [data, onClose]);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Cadastrar Receita</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title">Título</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formValues.title}
              onChange={handleChange}
              placeholder="Insira o título da receita"
              required
            />
          </div>

          <div>
            <label htmlFor="description">Descrição</label>
            <textarea
              id="description"
              name="description"
              value={formValues.description}
              onChange={handleChange}
              placeholder="Ex: este prato é muito bom para festas ou ambientes mais caseiros"
            />
          </div>

          <div>
            <label>Ingredientes</label>
            <div className="ingredient-input">
              <input
                type="text"
                name="quantity"
                placeholder="Qtd."
                value={newIngredient.quantity}
                onChange={handleIngredientChange}
              />
              <input
                type="text"
                name="unit"
                placeholder="Unid."
                value={newIngredient.unit}
                onChange={handleIngredientChange}
              />
              <input
                type="text"
                name="name"
                placeholder="Nome do ingrediente"
                value={newIngredient.name}
                onChange={handleIngredientChange}
              />
              <button type="button" onClick={addIngredient}>
                +
              </button>
            </div>
            <ul>
              {ingredients.map((ing, idx) => (
                <li key={idx}>
                  {ing.quantity} {ing.unit} {ing.name}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <label htmlFor="prepTime">Tempo de preparo (minutos)</label>
            <input
              type="number"
              id="prepTime"
              name="prepTime"
              value={formValues.prepTime}
              onChange={handleChange}
              placeholder="Em minutos"
            />
          </div>

          <div>
            <label htmlFor="instructions">Modo de preparo</label>
            <textarea
              id="instructions"
              name="instructions"
              value={formValues.instructions}
              onChange={handleChange}
              placeholder="Insira o modo de preparo da receita"
              required
            />
          </div>

          <div>
            <label>Etiquetas/Categorias</label>
            <div className="categories">
              {['Massa', 'Sopas e caldos', 'Carne', 'Aves', 'Mexicana', 'Vegano', 'Frutos do mar', 'Salada', 'Bebida'].map(
                (category) => (
                  <label key={category}>
                    <input
                      type="checkbox"
                      name="categories"
                      value={category}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setFormValues((prev) => ({
                            ...prev,
                            categories: [...prev.categories, category],
                          }));
                        } else {
                          setFormValues((prev) => ({
                            ...prev,
                            categories: prev.categories.filter((cat) => cat !== category),
                          }));
                        }
                      }}
                    />
                    {category}
                  </label>
                )
              )}
            </div>
          </div>

          <button type="submit" disabled={loading}>
            {loading ? 'Enviando...' : 'Salvar'}
          </button>
        </form>

        {error && <p className="error">Erro: {error.message}</p>}
        {data && <p className="success">Receita cadastrada com sucesso!</p>}
      </div>
    </div>
  );
}

export default RecipeModal;
