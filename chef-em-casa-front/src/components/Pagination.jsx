import React, { useState } from "react";

export default function Pagination({ totalPages, currentPage }) {

    const [numCurrentPage, setNumCurrentPage] = useState(currentPage);

    const nextPage = () => {
        if (numCurrentPage < totalPages) setNumCurrentPage(numCurrentPage+1);
    }

    const previousPage = () => {
        if (numCurrentPage > 1) setNumCurrentPage(numCurrentPage-1);
    }

    return (
        <div className="pagination">
            <button onClick={()=>setNumCurrentPage(1)} className={numCurrentPage == 1 ? "desabled" : ""}>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="M445-253.85 218.85-480 445-706.15 487.15-664 303.77-480l183.38 184L445-253.85Zm254 0L472.85-480 699-706.15 741.15-664 557.77-480l183.38 184L699-253.85Z" /></svg>
            </button>
            <button onClick={()=>previousPage()} className={numCurrentPage == 1 ? "desabled" : ""}>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="M560-253.85 333.85-480 560-706.15 602.15-664l-184 184 184 184L560-253.85Z" /></svg>
            </button>
            <span>
                {numCurrentPage} / {totalPages}
            </span>
            <button onClick={()=>nextPage()} className={numCurrentPage == totalPages ? "desabled" : ""}>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="m517.85-480-184-184L376-706.15 602.15-480 376-253.85 333.85-296l184-184Z" /></svg>
            </button>
            <button onClick={()=>setNumCurrentPage(totalPages)} className={numCurrentPage == totalPages ? "desabled" : ""}>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="M402.23-480 218.85-664 261-706.15 487.15-480 261-253.85 218.85-296l183.38-184Zm254 0L472.85-664 515-706.15 741.15-480 515-253.85 472.85-296l183.38-184Z" /></svg>
            </button>
        </div>
    )
}