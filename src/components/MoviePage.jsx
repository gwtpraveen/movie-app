import "../style/css/moviepage.css";
import Card from "./Card";
import movies from "../json/movies.json";
import SearchBar from "../components/SearchBar";
import { useState } from "react";

const MoviePage = ({onBookmark, bookmarks}) => {
    const [userSearch, setUserSearch] = useState("");
    const handleUserInput = (input) => {
        setUserSearch(input);
    };

    let filterData = movies;
    if (userSearch) {
        filterData = filterData.filter(item => item.Title.toLowerCase().startsWith(userSearch));
    }
    return ( 
        <>
            <SearchBar onUserSubmit={handleUserInput} placeholderText="Search Movie By Name"/>
            <section className="moviesSection">
                {filterData.map((item, idx) => <Card key={idx} data={item} onBookmark={onBookmark} bookmarks={bookmarks}/>)}
            </section>
        </>
    );
}
 
export default MoviePage;
