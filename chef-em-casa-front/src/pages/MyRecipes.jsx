import React, { useState } from "react";
import Menu from "../components/Menu";
import Footer from "../components/footer";
import Card from "../components/Card";
import RecipeModal from "../components/RecipeModal";
import useFetch from "../hooks/UseFetch";
function MyRecipes() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Fazendo a requisição de receitas
  const {
    data: dataFetch,
    error: errorFetch,
    loading: loadingFetch,
  } = useFetch("recipe/");

  return (
    <>
      <Menu />
      <main className="flex-column">
        <h1>Suas receitas</h1>
        <div className="cards-content">
          {loadingFetch && <p>Carregando suas receitas...</p>}

          {errorFetch && <p>Erro ao carregar receitas: {errorFetch}</p>}
          {dataFetch && dataFetch.length > 0 ? (
            dataFetch.map((recipe) => (
              <Card
                key={recipe.id}
                title={recipe.title}
                description={recipe.description}
                num_likes={recipe.num_likes}
                num_comments={recipe.num_comments}
                src_image={recipe.src_image}
              />
            ))
          ) : (
            <p>Nenhuma receita encontrada.</p>
          )}

          <div className="card card-add" onClick={openModal}>
            <button className="add-recipe-circle">+</button>
          </div>

          {/* Modal para adicionar nova receita */}
          {isModalOpen && <RecipeModal onClose={closeModal} />}
        </div>
      </main>

      <Footer />
    </>
  );
}

export default MyRecipes;
