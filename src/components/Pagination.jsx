import "../style/css/pagination.css";
import { useState} from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const Pagination = ({totalItems, itemPerPage, pageName}) => {
    let params = useParams();
    const totalPages = Math.ceil(totalItems / itemPerPage);
    const [page, setPage] = useState(Number(params.page));
    const numbers = [];
    let start = 0;
    let end = 5;

    if (page < 3) {
        start = 0;
        end = 5;
    } else if (page === totalPages - 1){
        start = page - 4;
        end = page + 2;
    } else if (page === totalPages) {
        start = page - 5;
        end = page  + 2;
    } else {
        start = page - 3;
        end = page + 2
    }

    for (let i = 0; i < totalPages; i++) {
        numbers.push(i + 1);
    }

    const handlePageNum = (num) => {
        setPage(num);
    };

    return ( 
        <ul className="pagination">
            {numbers.slice(start, end).map(item => <Link to={`/${pageName}/${item}`} key={item}><li className={page === item ? "item active" : "item"} onClick={() => handlePageNum(item)}>{item}</li></Link>)}
            {page <= totalPages - 3 ? <Link to={`/${pageName}/${totalPages}`} key={totalPages}><li className={page === totalPages ? "item active" : "item"} onClick={() => handlePageNum(totalPages)}>{totalPages}</li></Link>: null}
        </ul>  
     );
}

export default Pagination;
