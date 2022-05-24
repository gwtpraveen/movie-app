import SpecialCard from "./SpecialCard";
import "../style/css/carousel.css";
import FontAwesome from "react-fontawesome";

const Carousel = ({data}) => {
    return ( 
        <div className="carousel">
            <div className="container">
                {data.map(item => <SpecialCard data={item} key={item.imdbID}/>)}
            </div>
            <div className="left-arrow arrows">
                <FontAwesome className="fa-solid fa-angle-left" />
            </div>
            <div className="right-arrow arrows">
                <FontAwesome className="fa-solid fa-angle-right" />
            </div>
        </div>
     );
}
 
export default Carousel;