import SpecialCard from "./SpecialCard";
import { useRef } from "react";
import "../style/css/carousel.css";

const Carousel = ({data}) => {
    const carouselLength = useRef(0);
    const offset = useRef(0);
    const card = useRef();
    carouselLength.current =  data.length * 220 * -1;

    const moveCarousel = (direction) => {
        if (direction === "right") {
            if (offset.current + 220 <= 0) {
                offset.current = offset.current + 220;
                card.current.firstElementChild.style.transform = `translateX(${offset.current}px)`;
            }
        }
        if (direction === "left") {
            if (offset.current - 220 > carouselLength.current) {
                offset.current = offset.current - 220;
            } else {
                offset.current = 0;
            }
            if (card.current !== null) {
                card.current.firstElementChild.style.transform = `translateX(${offset.current}px)`;
            }
        }
    }

    const timer = setInterval(() => {
        moveCarousel("left");
    }, 2000)

    return ( 
        <div className="carousel" ref={card}>
            <div className="container">
                {data.map((item, idx) => <SpecialCard data={item} key={idx}/>)}
            </div>
            <div className="left-arrow arrows" onClick={() => {clearInterval(timer);moveCarousel("right")}}>
                <i className="fa-solid fa-angle-left"></i>
            </div>
            <div className="right-arrow arrows" onClick={() => moveCarousel("left")}>
                <i className="fa-solid fa-angle-right"></i>
            </div>
        </div>
     );
}
 
export default Carousel;
