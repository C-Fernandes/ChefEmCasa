import { useRef } from "react";
import React from "react";
import Menu from "../components/Menu";
import Footer from "../components/footer";
import Card from "../components/Card";
import Carousel from "../components/Carousel";

function Home() {
  return (
    <>
      <Menu />
      <div className="hero">
        <h1>Chef em Casa</h1>
        <p className="description">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam
          inventore iure tempora excepturi consequatur at iste dolorem quia enim
          autem mollitia nihil.
        </p>
        <button>Explorar</button>
      </div>
      <main>
        <section id="home__receitas-populares">
          <h1>Receitas mais populares</h1>

          <div className="cards-content">
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
          </div>

          <div className="button">
            <button>Ver mais</button>
          </div>
        </section>

        <section>
          <h1>Explore as categorias culinárias</h1>

          <Carousel>
            <div className="card-category item" id="massas">
              Massas
            </div>
            <div className="card-category item" id="sopas">
              Sopas e caldos
            </div>
            <div className="card-category item" id="carnes">
              Carnes
            </div>
            <div className="card-category item" id="sobremesas">
              Sobremesa
            </div>
            <div className="card-category item" id="frutos-do-mar">
              Frutos do mar
            </div>
            <div className="card-category item" id="vegano">
              Vegano
            </div>
            <div className="card-category item" id="etnicas">
              Comidas Étnicas
            </div>
            <div className="card-category item" id="bebidas">
              Bebidas
            </div>
            <div className="card-category item" id="aves">
              Aves
            </div>
            <div className="card-category item" id="vegetariano">
              Vegetariano
            </div>
            <div className="card-category item" id="graos">
              Grãos e Cereais
            </div>
            <div className="card-category item" id="risoto">
              Risoto
            </div>
            <div className="card-category item" id="paes">
              Pães e Massas Germentadas
            </div>
            <div className="card-category item" id="molhos">
              Molhos
            </div>
            <div className="card-category item" id="lanches">
              Lanches
            </div>
          </Carousel>
        </section>
      </main>
      <Footer />
    </>
  );
}
export default Home;
