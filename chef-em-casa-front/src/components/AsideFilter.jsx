function AsideFilter(props) {
    return (
        <aside className="filter">
            <h3>Filtrar por:</h3>
            <div>
                <div className="filter-section">
                    <h4>Ingredientes</h4>
                    <div className="input-content">
                        <input className="input" type="text" placeholder="Nome do ingrediente" />
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M454.04-454.54H228.08v-51.92h225.96v-225.96h51.92v225.96h225.96v51.92H505.96v225.96h-51.92v-225.96Z" /></svg>
                        </button>
                    </div>
                    <div className="options">
                        <div className="option marked">
                            <span>Macarrão</span>
                            <span className="btn">
                                <svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" width="16px" fill="#FFFFFF"><path d="m294-246-47-48 185-186-185-186 47-48 186 186 186-186 47 48-185 186 185 186-47 48-186-186-186 186Z" /></svg>
                            </span>
                        </div>
                        <div className="option marked">
                            <span>Arroz</span>
                            <span className="btn">
                                <svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" width="16px" fill="#FFFFFF"><path d="m294-246-47-48 185-186-185-186 47-48 186 186 186-186 47 48-185 186 185 186-47 48-186-186-186 186Z" /></svg>
                            </span>
                        </div>
                        <div className="option marked">
                            <span>Arroz</span>
                            <span className="btn">
                                <svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" width="16px" fill="#FFFFFF"><path d="m294-246-47-48 185-186-185-186 47-48 186 186 186-186 47 48-185 186 185 186-47 48-186-186-186 186Z" /></svg>
                            </span>
                        </div>
                        <div className="option marked">
                            <span>Molho de Tomate</span>
                            <span className="btn">
                                <svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" width="16px" fill="#FFFFFF"><path d="m294-246-47-48 185-186-185-186 47-48 186 186 186-186 47 48-185 186 185 186-47 48-186-186-186 186Z" /></svg>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="filter-section">
                    <h4>Categoria</h4>
                    <div className="options">
                        <div className="option marked">Massa</div>
                        <div className="option">Sopas e Caldos</div>
                        <div className="option marked">Carne</div>
                        <div className="option">Salada</div>
                        <div className="option marked">Bebida</div>
                    </div>
                </div>
            </div>

            <h3>Ordenar por:</h3>
            <div>
                <div className="filter-section">
                    <div className="options">
                        <div className="option">Nome</div>
                        <div className="option">Data de publicação</div>
                        <div className="option">Mais curtidas</div>
                        <div className="option marked">Mais estrelas</div>
                    </div>
                </div>
            </div>

            <div className="options buttons">
                <button id="clear-filter-button" className="simple-button">Limpar</button>
                <button id="filter-button" className="simple-button">Filtrar</button>
            </div>
        </aside>
    );
}

export default AsideFilter;
