import "../style/css/card.css";
import { useState, memo } from "react";

const Card = ({data, onBookmark, bookmarks}) => {
    const {Title, Year, Rated, Poster, Type, imdbID} = data;
    const [isBookmarked, setIsbookmarked] = useState(bookmarks.includes(Title));

    const onClickBookmark = () => {
        setIsbookmarked(preVal => !preVal);
        onBookmark(imdbID, Type)
    }

    return ( 
         <div className="card">
             <div className="image-container">
                <img src={Poster} alt="movie poster" className="poster"/>
             </div>
             <div className="details-container">
                 <div className="list">
                     <p className="list-item">{Year}</p>
                     <p className="list-item">{Rated}</p>
                 </div>
                 <h2 className="title">{Title}</h2>
             </div>
             <div className="bookmark-icon-container" onClick={onClickBookmark}>
                 <img src={`./images/icons/icon-bookmark-${ isBookmarked ? "full":"empty"}.svg`} alt="" className="bookmark-icon"/>
             </div>
         </div>
     );
}

export default memo(Card);
