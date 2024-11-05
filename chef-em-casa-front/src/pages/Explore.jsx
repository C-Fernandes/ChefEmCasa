import React from "react";
import Menu from "../components/Menu";
import Card from "../components/Card";
import AsideFilter from "../components/AsideFilter";
import Footer from "../components/footer";

function Explore() {
    return (
        <>
            <Menu />
            <main className="flex-row">
                <AsideFilter />
                <div>
                    <h1>Encontre receitas incríveis!</h1>
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
                        <Card
                            title="Título da receita"
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                            num_likes={30}
                            num_comments={40}
                            src_image="https://cdn.pixabay.com/photo/2020/02/29/15/20/cake-4890393_1280.jpg"
                        />
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    );
}
export default Explore;
