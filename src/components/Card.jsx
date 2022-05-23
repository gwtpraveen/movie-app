import "../style/css/card.css";

const Card = ({data}) => {
    const {Title, Year, Rated, Type, Poster} = data;
    return ( 
         <div className="card">
             <div className="image-container">
                <img src={Poster} alt="movie poster" className="poster"/>
             </div>
             <div className="details-container">
                 <div className="list">
                     <p className="list-item">{Year}</p>
                     <p className="list-item">{Type}</p>
                     <p className="list-item">{Rated}</p>
                 </div>
                 <h2 className="title">{Title}</h2>
             </div>
             <div className="bookmark-icon-container">
                 <img src="./images/icons/icon-bookmark-empty.svg" alt="" className="bookmark-icon"/>
             </div>
         </div>
     );
}
 
export default Card;
