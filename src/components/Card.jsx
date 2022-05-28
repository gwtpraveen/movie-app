import "../style/css/card.css";
import { useState, memo, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Card = ({data, onBookmark, bookmarks}) => {
    const card = useRef()
    const {Title, Year, Rated, Poster, Type, imdbID} = data;
    const [isBookmarked, setIsbookmarked] = useState(bookmarks.includes(imdbID));

    const onClickBookmark = () => {
        setIsbookmarked(preVal => !preVal);
        onBookmark(imdbID, Type)
    }

    const opctions = {
        rootMargin: "0px 0px 0px 0px",
        threshold: 0.25
    };

    const lazyLoadingOpctions = {
        rootMargin: "0px 0px 300px 0px",
    }

    useEffect(() => {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    card.current.classList.add("show");
                    observer.unobserve(card.current);
                }
            });
        }, opctions);

        const lazyLoadingObserver = new IntersectionObserver((entries, lazyLoadingObserver) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const imgSrc = Poster;
                    card.current.firstElementChild.firstElementChild.src = imgSrc;
                    lazyLoadingObserver.unobserve(card.current);
                }
            });
        }, lazyLoadingOpctions);

        observer.observe(card.current);
        lazyLoadingObserver.observe(card.current);
    })


    return ( 
         <div className="card" ref={card}>
             <div className="image-container">
                <img src="iWillReplaceSoon" alt="movie poster" className="poster"/>
             </div>
             <div className="details-container">
                 <div className="list">
                     <p className="list-item">{Year}</p>
                     <p className="list-item">{Rated}</p>
                 </div>
                 <Link to={`/home/details/${Type}/${imdbID}`}>
                    <h2 className="title">{Title}</h2>
                 </Link>
             </div>
             <div className="bookmark-icon-container" onClick={onClickBookmark}>
                 <img src={`./images/icons/icon-bookmark-${ isBookmarked ? "full":"empty"}.svg`} alt="" className="bookmark-icon"/>
             </div>
         </div>
     );
}

export default memo(Card);
