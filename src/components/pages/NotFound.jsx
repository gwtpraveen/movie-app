import "../../style/css/notfound.css";
import { Link } from "react-router-dom";

const NotFound = (props) => {
    return ( 
        <section className="notfound">
            <h2 className="h2">Oops!</h2>
            <p className="status">404 - PAGE NOT FOUND</p>
            <p className="message">The page you are looking for might have been removed, had its name changed or is temporaily unavailable</p>
            <Link to="/home">
            <button className="btn">GO TO HOMEPAGE</button>
            </Link>
        </section>
     );
}
 
export default NotFound;
