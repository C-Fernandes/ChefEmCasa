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
          {dataFetch && dataFetch.length > 0 ? (
            dataFetch.map((recipe) => (
              <Card
                key={recipe.id}
                title={recipe.title}
                description={recipe.description}
                num_likes={recipe.num_likes}
                num_comments={recipe.num_comments}
                src_image={recipe.imageUrlString}
              />
            ))
          ) : (
            <p></p>
          )}{" "}
          <Card
            title="Título da receita"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            num_likes={30}
            num_comments={40}
            src_image="https://cdn.pixabay.com/photo/2020/02/29/15/20/cake-4890393_1280.jpg"
          />
          <Card
            title="Título da receita"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitationg ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            num_likes={30}
            num_comments={40}
            src_image="https://cdn.pixabay.com/photo/2020/02/29/15/20/cake-4890393_1280.jpg"
          />
          <Card
            title="Título da receita"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            num_likes={30}
            num_comments={40}
            src_image="https://cdn.pixabay.com/photo/2020/02/29/15/20/cake-4890393_1280.jpg"
          />
          <Card
            title="Título da receita"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            num_likes={30}
            num_comments={40}
            src_image="https://cdn.pixabay.com/photo/2020/02/29/15/20/cake-4890393_1280.jpg"
          />
          <Card
            title="Título da receita"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            num_likes={30}
            num_comments={40}
            src_image="https://cdn.pixabay.com/photo/2020/02/29/15/20/cake-4890393_1280.jpg"
          />
          <div className="card card-add" onClick={openModal}>
            <button className="add-recipe-circle">+</button>
          </div>
          {isModalOpen && <RecipeModal onClose={closeModal} />}
        </div>
      </main>

      <Footer />
    </>
  );
}

export default MyRecipes;
