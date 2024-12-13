import React, { useState } from "react";
import Menu from "../components/Menu";
import Footer from "../components/footer";


function Recipes() {
    return (
        <>
            <Menu />
            <div className="container">
                <div className="div-btn-voltar">
                    <button className="btn-voltar">
                        <img src="/icons/voltar.svg" alt="Voltar"
                            style={{
                                marginRight: "8px", // Espaçamento simples e direto
                            }} />
                        Voltar
                    </button>
                </div>
                <div className="informacoes">
                    <img className="imagem-informacoes" src="/images/torta.jpeg" alt="" />
                    <h1>Torta de Chocolate</h1>
                    <div className="estrelas">
                        <span style={{ color: "#FFA834" }}>4.8</span>
                        <img className="star" src="/icons/estrela.png" alt="" />
                        <img className="star" src="/icons/estrela.png" alt="" />
                        <img className="star" src="/icons/estrela.png" alt="" />
                        <img className="star" src="/icons/estrela.png" alt="" />
                        <img className="star" src="/icons/estrela.png" alt="" />
                        <img className="clock" src="/icons/relogio.png" alt="" />
                        <span style={{ color: "#60E3C4" }}>40 min</span>
                    </div>
                    <div className="descricao-receita">
                        Aqui vai a descrição da receita. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque consectetur, lectus nec malesuada efficitur, eros felis rutrum felis.
                    </div>
                    <div>
                        <h2>Ingredientes:</h2>
                    </div>
                    <div className="ingredientes-receita">
                        <ul>
                            <li>1 copo de ingrediente</li>
                            <li>2 colheres de ingrediente</li>
                            <li>400g de ingrediente</li>
                        </ul>
                    </div>
                    <div>
                        <h2>Modo de Preparo:</h2>
                    </div>
                    <div className="modo-de-preparo">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque consectetur, lectus nec malesuada efficitur, eros felis rutrum felis, pulvinar semper nisi est interdum nibh. Vivamus tempus odio sed nibh aliquam vehicula. Aliquam eu gravida urna. Phasellus non sollicitudin neque. Integer volutpat ultricies gravida. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur volutpat, metus ac accumsan euismod, felis est tempor metus, sit amet sollicitudin orci erat nec nisl. Integer non metus semper, posuere elit eu, porta tortor. Nullam rutrum eros ac porta condimentum. Morbi eu lorem suscipit tortor malesuada ullamcorper sit amet ac lectus. Sed pretium velit at lorem faucibus euismod.
                        Nullam eu leo vitae mauris accumsan molestie sit amet a nibh. Nam consectetur nisi a commodo mollis. Morbi ac auctor odio. Sed laoreet vulputate sem ut mollis. Sed in erat vel purus auctor pulvinar. Nam sagittis aliquam erat. Aliquam scelerisque, augue ut elementum sodales, tellus velit pulvinar libero, et gravida ante lectus quis dui. Maecenas convallis blandit eros, ut pulvinar nulla rhoncus vel. Vestibulum nec tristique tortor. Aliquam sed sapien in est mollis ultrices nec a purus. Nam eget magna sed mauris interdum elementum porta at mi. Ut imperdiet purus lacus, in pretium ligula rutrum quis. Praesent a mauris dignissim, lacinia dui a, aliquam erat. Maecenas auctor condimentum diam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed dignissim ex sed nisl facilisis, sed fermentum risus facilisis.
                    </div>
                    <div className="autoria-receita">
                        Receita criada por
                        <div className="circulo"></div>
                        <b>Nome da Pessoa</b>
                    </div>
                </div>

            </div>
            <Footer />
        </>
    );
}
export default Recipes;