import React, { useState } from "react";
import Menu from "../components/Menu";
import Footer from "../components/footer";


function Recipes(props) {

    const [liked, setLiked] = useState(false);

    const toogleLike = () => {
        setLiked(!liked);
    }

    return (
        <>
            <Menu />
            <div className="container" id="recipe">
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
                    <div className="flex-row">
                        <button onClick={toogleLike} className="like-button" style={{ color: "rgb(255, 93, 93)" }}>
                            {
                                liked ?
                                    <>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#FF5D5D"><path d="m480-144-50-45q-100-89-165-152.5t-102.5-113Q125-504 110.5-545T96-629q0-89 61-150t150-61q49 0 95 21t78 59q32-38 78-59t95-21q89 0 150 61t61 150q0 43-14 83t-51.5 89q-37.5 49-103 113.5T528-187l-48 43Z" /></svg>

                                        <span>{props.numLikes + 1}</span>
                                    </>
                                    :
                                    <>
                                        <svg className="heart" xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#FF5D5D"><path d="m480-131-54-48.5q-99.27-89.57-164.13-154.54Q197-399 158.72-450.4q-38.29-51.4-53.5-94.48Q90-587.96 90-633q0-91.01 61-152 60.99-61 152-61 51.29 0 97.64 22Q447-802 480-761q34.5-41 80-63t97-22q91.01 0 152 61 61 60.99 61 152 0 45.04-15.22 88.12-15.21 43.08-53.5 94.48Q763-399 698.13-334.04 633.27-269.07 534-179.5L480-131Zm0-101q94-85 155-145.5T731.5-483q35.5-45 49.5-80.18 14-35.18 14-69.86 0-59.46-39.36-98.71Q716.28-771 657.25-771q-46.25 0-86 26.5t-56.25 69h-70q-16.5-42.5-56.25-69t-86-26.5q-59.03 0-98.39 39.25T165-633.04q0 34.68 14 69.86T228.5-483Q264-438 325-377.5T480-232Zm0-269.5Z" /></svg>

                                        <span>{props.numLikes}</span>
                                    </>

                            }
                        </button>
                        <span style={{ color: "#60E3C4" }}>

                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#60E3C4"><path d="m612-292 56-56-148-148v-184h-80v216l172 172ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z" /></svg>
                            <span >40 min</span>
                        </span>
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
                    <div className="comentarios-receita">
                        <h2 style={{ marginBottom: "20px" }}>3 Comentários</h2>
                        <div className="comentario-pessoal">
                            <div className="circulo"></div>
                            <div className="espaco-comentario">
                                <input className="input-comentario" type="text" placeholder="Faça um comentário" />
                                <div className="options buttons">
                                    <button className="simple-button">Comentar</button>
                                    <button className="simple-button cancel-button">Cancelar</button>
                                </div>
                            </div>
                        </div>
                        <div className="comentario-div">
                            <div className="circulo"></div>
                            <div className="comentario">
                                <h4 className="texto-comentario">Nome do usuário 1</h4>
                                <div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                            </div>
                        </div>
                        <div className="comentario-div">
                            <div className="circulo"></div>
                            <div className="comentario">
                                <h4 className="texto-comentario">Nome do usuário 2</h4>
                                <div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque consectetur, lectus nec malesuada efficitur, eros felis rutrum felis, pulvinar semper nisi est interdum nibh. Vivamus tempus odio sed nibh aliquam vehicula. Aliquam eu gravida urna. Phasellus non sollicitudin neque. Integer volutpat ultricies gravida. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</p>
                                </div>
                            </div>
                        </div>
                        <div className="comentario-div">
                            <div className="circulo"></div>
                            <div className="comentario">
                                <h4 className="texto-comentario">Nome do usuário 3</h4>
                                <div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque consectetur, lectus nec malesuada efficitur, eros felis rutrum felis, pulvinar semper nisi est interdum nibh.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </>
    );
}
export default Recipes;