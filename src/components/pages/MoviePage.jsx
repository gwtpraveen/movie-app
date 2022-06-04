import "../../style/css/moviepage.css";
import Card from "../Card";
import movies from "../../json/movies.json";
import SearchBar from "../SearchBar";
import ResultNotFound from "../ResultNotFound";
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
            <section className="section">
                {userSearch ? filterData.length !== 0 ? <p className="showResult">Show result <span>{userSearch}</span></p> : null : null}
                {filterData.length !== 0 ?
                    <div className="moviesSection">
                        {filterData.map((item, idx) => <Card key={idx} data={item} onBookmark={onBookmark} bookmarks={bookmarks}/>)}
                    </div> :
                    <ResultNotFound userSearch={userSearch} bookmarks={bookmarks} onBookmark={onBookmark}/>
                }
            </section>
        </>
    );
}
 
export default MoviePage;
