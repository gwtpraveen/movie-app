import "../style/css/moviepage.css";
import Card from "./Card";
import movies from "../json/movies.json";

const MoviePage = ({onBookmark, bookmarks}) => {
    return ( 
        <section className="moviesSection">
            {movies.map((item, idx) => <Card key={idx} data={item} onBookmark={onBookmark} bookmarks={bookmarks}/>)}
        </section>
    );
}
 
export default MoviePage;
