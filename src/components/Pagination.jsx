import "../style/css/pagination.css";
import { useState } from "react";

const Pagination = ({totalItems, itemPerPage}) => {
    const items = totalItems / itemPerPage;
    const [page, setPage] = useState(1);
    const numbers = [];

    for (let i = 0; i < items; i++) {
        numbers.push(i + 1);
    }

    const handlePageNum = (num) => {
        setPage(num)
    };

    const clickNext = () => {
        if (page < items) {
            setPage(prevVal => prevVal + 1);
        }
    };

    const clickPrev = () => {
        if (page > 1) {
            setPage(prevVal => prevVal - 1);
        }
    };


    return ( 
        <ul className="pagination">
            <li className="item prev" onClick={clickPrev}>Prev</li>
            {numbers.map(item => <li key={item} className={page === item ? "item active" : "item"} onClick={() => handlePageNum(item)}>{item}</li>)}
            <li className="item next" onClick={clickNext}>Next</li>
        </ul>  
     );
}

export default Pagination;
