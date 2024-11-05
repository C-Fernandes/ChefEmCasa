<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400&display=swap"/>


function Menu() {


    return (
        <div className="menu">
            <h2>ChefEmCasa</h2>
            <div id="nav">
                <a href="/">Inicio</a>
                <a href="/explorar">Explorar</a>
                <a href="">Criar</a>
            </div>
            <div className="input">
                <img src="./icons/searchIcon.png" alt="Icone de busca"/>
                <input type="text" placeholder="Pesquise por uma receita"/>
            </div>
            <div className="userName">
                <p>User Name</p>
                <span className="initial">U</span>
            </div>

        </div>
    );
}

export default Menu;
