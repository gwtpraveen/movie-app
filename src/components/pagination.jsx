import "../style/css/pagination.css";
import { useRef } from "react";

const Pagination = ({totalItems, itemPerPage}) => {
    const items = totalItems / itemPerPage;
    const numbers = [];
    for (let i = 0; i < items; i++) {
        numbers.push(i + 1);
    }
    return ( 
        <ul className="pagination">
            <li className="item prev">Prev</li>
            {numbers.map(item => <li key={item} className="item">{item}</li>)}
            <li className="item next">Next</li>
        </ul>  
     );
}
 
export default Pagination;