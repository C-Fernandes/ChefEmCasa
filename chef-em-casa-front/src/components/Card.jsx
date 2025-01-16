function Card(props) {
    // Função para gerar o URL da imagem aleatória
    const getRandomImage = () => {
        const randomNumber = Math.floor(Math.random() * 10) + 1; // Número entre 1 e 10
        return `/images/card-images/${randomNumber}.jpg`; // Substitua "/path/to/images/" pelo caminho real das imagens
    };

    return (
        <a href="/recipe">
            <div className="card">
                <div
                    className="image"
                    style={{ backgroundImage: `url(${getRandomImage()})` }}
                ></div>
                <h3 className="title">{props.title}</h3>
                <p className="description">{props.description}</p>
                <footer className="card-actions">
                    <button>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="20px"
                            viewBox="0 -960 960 960"
                            width="20px"
                            fill="#FF5D5D"
                        >
                            <path d="m480-131-54-48.5q-99.27-89.57-164.13-154.54Q197-399 158.72-450.4q-38.29-51.4-53.5-94.48Q90-587.96 90-633q0-91.01 61-152 60.99-61 152-61 51.29 0 97.64 22Q447-802 480-761q34.5-41 80-63t97-22q91.01 0 152 61 61 60.99 61 152 0 45.04-15.22 88.12-15.21 43.08-53.5 94.48Q763-399 698.13-334.04 633.27-269.07 534-179.5L480-131Zm0-101q94-85 155-145.5T731.5-483q35.5-45 49.5-80.18 14-35.18 14-69.86 0-59.46-39.36-98.71Q716.28-771 657.25-771q-46.25 0-86 26.5t-56.25 69h-70q-16.5-42.5-56.25-69t-86-26.5q-59.03 0-98.39 39.25T165-633.04q0 34.68 14 69.86T228.5-483Q264-438 325-377.5T480-232Zm0-269.5Z" />
                        </svg>
                        {props.num_likes}
                    </button>
                    <button>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="20px"
                            viewBox="0 -960 960 960"
                            width="20px"
                            fill="#34E0B6"
                        >
                            <path d="M246-389h327v-67H246v67Zm0-130h468v-67H246v67Zm0-130h468v-67H246v67ZM106-111v-677q0-27.64 19.68-47.32T173-855h614q27.64 0 47.32 19.68T854-788v472q0 27.64-19.68 47.32T787-249H244L106-111Zm110.5-205H787v-472H173v516l43.5-44Zm-43.5 0v-472 472Z" />
                        </svg>
                        {props.num_comments}
                    </button>
                    <button>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="20px"
                            viewBox="0 -960 960 960"
                            width="20px"
                            fill="#FFA834"
                        >
                            <path d="M248-156v-584q0-27.64 19.68-47.32T315-807h330q27.64 0 47.32 19.68T712-740v584l-232-92-232 92Zm67-99 165-66 165 66v-485H315v485Zm0-485h330-330Z" />
                        </svg>
                    </button>
                </footer>

            </div >
        </a>
    );
}

export default Card;
