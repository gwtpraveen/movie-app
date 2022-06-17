import "../style/css/pagination.css";
import { useState} from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const Pagination = ({totalItems, itemPerPage}) => {
    let params = useParams();
    const items = totalItems / itemPerPage;
    const [page, setPage] = useState(Number(params.page));
    const numbers = [];

    for (let i = 0; i < items; i++) {
        numbers.push(i + 1);
    }

    const handlePageNum = (num) => {
        setPage(num);
    };

    return ( 
        <ul className="pagination">
            {numbers.map(item => <Link to={`/movies/${item}`} key={item}><li className={page === item ? "item active" : "item"} onClick={() => handlePageNum(item)}>{item}</li></Link>)}
        </ul>  
     );
}

export default Pagination;
