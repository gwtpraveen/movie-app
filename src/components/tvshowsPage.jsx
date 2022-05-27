import "../style/css/tvshowspage.css";
import Card from "./Card";
import tvshows from "../json/tvshows.json";

const TvShowspage = ({onBookmark, bookmarks}) => {
    return ( 
        <section className="tvshowSection">
            {tvshows.map((item, idx) => <Card key={idx} data={item} onBookmark={onBookmark} bookmarks={bookmarks}/>)}
        </section>
     );
}
 
export default TvShowspage;
