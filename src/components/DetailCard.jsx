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
                    <span>{Production}</span>
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
                            <p><span>{imdbRating}</span>/10</p>
                            <p>{imdbVotes}</p>
                        </div>
                    </div>
                </div>
                <p>{Language}</p>
                <p>{Plot}</p>
                <div>
                    {Genre.split(", ").map(item => <button key={item}>{item}</button>)}
                </div>
                <p>Director : {Director}</p>
                <p>Writer: {Writer}</p>
                <p>Actors: {Actors}</p>
                <p>Awards: {Awards}</p>
                <p>Country: {Country}</p>
                <p>BoxOffice: {BoxOffice}</p>
            </div>
        </div>
     );
}
 
export default DetailsCard;