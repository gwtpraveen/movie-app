import "../../style/css/detailsCard.css";
import movies from "../../json/movies.json";
import tvshows from "../../json/tvshows.json"
import { useParams } from "react-router-dom";

const DetailsCard = () => {
    let params = useParams();
    let data;

    if (params.type === "movie") {
        data = movies.filter(item => item.imdbID === params.id)[0];
    } else {
        data = tvshows.filter(item => item.imdbID === params.id)[0];
    }

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
                        <i className="fa-solid fa-star" />
                        <div>
                            <span className="rating">{imdbRating}</span><span className="ten">/10</span>
                            <p>{imdbVotes}</p>
                        </div>
                    </div>
                </div>
                <p className="language"><i className="fa-solid fa-language"></i>{Language}</p>
                <p className="plot">{Plot}</p>
                <div className="genres">
                    {Genre.split(", ").map(item => <button key={item} className="btn">{item}</button>)}
                </div>
                <div className="other">
                    <p><i className="fa-solid fa-building"></i>Production: {Production}</p>
                    <p><i className="fa-solid fa-clapperboard"></i>Director : {Director}</p>
                    <p><i className="fa-solid fa-pen-clip"></i>Writer: {Writer}</p>
                    <p><i className="fa-solid fa-users-line"></i>Actors: {Actors}</p>
                    <p><i className="fa-solid fa-trophy"></i>Awards: {Awards}</p>
                    <p><i className="fa-solid fa-earth-americas"></i>Country: {Country}</p>
                    <p><i className="fa-solid fa-ticket"></i>BoxOffice: {BoxOffice}</p>
                </div>
            </div>
        </div>
     );
}
 
export default DetailsCard;