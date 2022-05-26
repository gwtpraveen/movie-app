import "../style/css/moviepage.css";
import Card from "./Card";
import movies from "../json/movies.json";

const MoviePage = (props) => {
    return ( 
        <section className="moviesSection">
            {movies.map((item, idx) => <Card key={idx} data={item}/>)}
        </section>
    );
}
 
export default MoviePage;
