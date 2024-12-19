import { useRef } from "react";
import React from "react";

function Carousel({ children }) {

    const carousel = useRef(null);
    

    const handleLeftClick = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft -= carousel.current.offsetWidth / 2;
    }

    const handleRightClick = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft += carousel.current.offsetWidth / 2;
    }

    return (
        <div className="carousel">
            <div className="carousel__content" ref={carousel}>
                {children}
            </div>

            <button onClick={handleLeftClick} className="carousel__left">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="M560-253.85 333.85-480 560-706.15 602.15-664l-184 184 184 184L560-253.85Z" /></svg>
            </button>

            <button onClick={handleRightClick} className="carousel__right">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="m517.85-480-184-184L376-706.15 602.15-480 376-253.85 333.85-296l184-184Z" /></svg>
            </button>
        </div>
    );
}
export default Carousel;
