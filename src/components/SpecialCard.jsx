import "../style/css/specialCard.css";
import { useRef, useEffect } from "react";

const SpecialCard = ({data}) => {
    const {Title, Year, Rated, Type, Poster} = data;
    const card = useRef();
    useEffect(() => {
        const imgEle = card.current;

        const opctions = {
            rootMargin: "0px 220px 0px 0px"
        }

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.firstElementChild.firstElementChild.src = Poster;
                    // console.log(entry.target.lastElementChild.firstElementChild.firstElementChild.innerHTML)
                    observer.unobserve(entry.target);
                }
            })
        }, opctions);

        observer.observe(imgEle);
    })

    return ( 
            <div className="special-card" ref={card}>
                <div className="image-container">
                    <img src="thisWillReplaceSoon" alt="movie poster" className="poster"/>
                </div>
                <div className="hover">
                    <div className="details-container">
                        <h2 className="title">{Title}</h2>
                        <div className="list">
                            <p className="list-item">{Year}</p>
                            <p className="list-item">{Type}</p>
                            <p className="list-item">{Rated}</p>
                        </div>
                    </div>
                    <div className="bookmark-icon-container">
                        <img src="./images/icons/icon-bookmark-empty.svg" alt="" className="bookmark-icon"/>
                    </div>
                </div>
            </div>
    );
}
 
export default SpecialCard;