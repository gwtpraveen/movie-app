import "../style/css/resultnotfound.css";
import movies from "../json/movies.json";
import Card from "./Card";

const ResultNotFound = ({userSearch, bookmarks, onBookmark}) => {
    const keywords = userSearch.split(" ");
    const results = movies.filter(item => item.Title.toLocaleLowerCase().includes(keywords[0].toLocaleLowerCase()))
    console.log(results)
    
    return ( 
        <section>
            <a href="/movies/1">Back</a>
            <p>result not found on <span>{userSearch}</span></p>
            <div className="resutlnotfoundMovies">
                {results.map((item, idx) => <Card key={idx} data={item} bookmarks={bookmarks} onBookmark={onBookmark}/>)}
            </div>
        </section>
     );
}
 
export default ResultNotFound;
