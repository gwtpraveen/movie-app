import SpecialCard from "./SpecialCard";
import { useRef, useState } from "react";
import "../style/css/carousel.css";

const Carousel = ({data}) => {
    const carouselLength = useRef(0);
    const [offset, setOffset] = useState(0);
    carouselLength.current =  data.length * 220 * -1;

    const moveCarousel = (direction) => {
        if (direction === "right") {
            if (offset + 220 <= 0) {
                setOffset(prevVal => prevVal + 220);
            }
        }
        if (direction === "left") {
            if (offset - 220 > carouselLength.current) {
                setOffset(prevVal => prevVal - 220);
            } else {
                setOffset(0);
            }
        }
    }

    return ( 
        <div className="carousel">
            <div className="container" style={{transform: `translateX(${offset}px)`}}>
                {data.map(item => <SpecialCard data={item} key={item.imdbID}/>)}
            </div>
            <div className="left-arrow arrows" onClick={() => moveCarousel("right")}>
                <i className="fa-solid fa-angle-left"></i>
            </div>
            <div className="right-arrow arrows" onClick={() => moveCarousel("left")}>
                <i className="fa-solid fa-angle-right"></i>
            </div>
        </div>
     );
}
 
export default Carousel;
