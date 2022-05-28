import "../../style/css/tvshowspage.css";
import Card from "../Card";
import tvshows from "../../json/tvshows.json";
import SearchBar from "../SearchBar";
import { useState } from "react";

const TvShowspage = ({onBookmark, bookmarks}) => {
    const [userSearch, setUserSearch] = useState("");

    const handleUserInput = (input) => {
        setUserSearch(input);
    }

    let filterData = tvshows;
    if (userSearch) {
        filterData = filterData.filter(item => item.Title.toLowerCase().startsWith(userSearch));
    }
    return ( 
        <>
            <SearchBar onUserSubmit={handleUserInput} placeholderText="Search Tv Series by Name"/>
            <section className="tvshowSection">
                {filterData.map((item, idx) => <Card key={idx} data={item} onBookmark={onBookmark} bookmarks={bookmarks}/>)}
            </section>
        </>
     );
}
 
export default TvShowspage;
