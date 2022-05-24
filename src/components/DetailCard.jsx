import FontAwesome from "react-fontawesome";
import "../style/css/detailsCard.css";

const DetailsCard = ({data}) => {
    const {Title, Plot, Poster, Released, Production, Type, Rated, Runtime, imdbRating, imdbVotes, Language, Genre, Director, Writer, Actors, Awards, BoxOffice, Country} = data;
    return ( 
        <div className="details-card">
            <div className="poster">
                <img src={Poster} alt="movie poster" />
            </div>
            <div className="details-div">
                <div className="type-production-container">
                    <span className="type">{Type}</span>
                </div>
                <div className="title-rating-container">
                    <div className="title-div">
                        <h2 className="title">{Title}</h2>
                        <div>
                            <span>{Released}</span>
                            <span>{Rated}</span>
                            <span>{Runtime}</span>
                        </div>
                    </div>
                    <div className="rating-div">
                        <FontAwesome className="fa-solid fa-star" />
                        <div>
                            <span className="rating">{imdbRating}</span><span className="ten">/10</span>
                            <p>{imdbVotes}</p>
                        </div>
                    </div>
                </div>
                <p className="language">{Language}</p>
                <p className="plot">{Plot}</p>
                <div className="genres">
                    {Genre.split(", ").map(item => <button key={item} className="btn">{item}</button>)}
                </div>
                <div className="other">
                    <p>Production: {Production}</p>
                    <p>Director : {Director}</p>
                    <p>Writer: {Writer}</p>
                    <p>Actors: {Actors}</p>
                    <p>Awards: {Awards}</p>
                    <p>Country: {Country}</p>
                    <p>BoxOffice: {BoxOffice}</p>
                </div>
            </div>
        </div>
     );
}
 
export default DetailsCard;