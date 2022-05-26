import "../style/css/tvshowspage.css";
import Card from "./Card";
import tvshows from "../json/tvshows.json";

const TvShowspage = (props) => {
    return ( 
        <section className="tvshowSection">
            {tvshows.map((item, idx) => <Card key={idx} data={item}/>)}
        </section>
     );
}
 
export default TvShowspage;
