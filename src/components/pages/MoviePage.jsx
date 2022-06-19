import "../../style/css/moviepage.css";
import Card from "../Card";
import movies from "../../json/movies.json";
import SearchBar from "../SearchBar";
import ResultNotFound from "../ResultNotFound";
import { useState } from "react";
import Pagination from "../Pagination";
import { useParams, useNavigate } from "react-router-dom";

const MoviePage = ({onBookmark, bookmarks}) => {
    const [userSearch, setUserSearch] = useState("");
    let params = useParams();
    let pageNumber = params.page;
    const navigate = useNavigate();

    const handleUserInput = (input) => {
        setUserSearch(input);
    };

    let filterData = movies;
    if (userSearch) {
        filterData = filterData.filter(item => item.Title.toLowerCase().startsWith(userSearch));
    }

    if (filterData.length > 12) {
        filterData = movies.slice((pageNumber - 1) * 12 , pageNumber * 12);
    }

    return ( 
        <>
            <SearchBar onUserSubmit={handleUserInput} placeholderText="Search Movie By Name"/>
            <section className="section">
                {userSearch ? filterData.length !== 0 ? <><a href="/movies/1">Back</a><p className="showResult">Show result <span>{userSearch}</span></p></> : null : null}
                {filterData.length !== 0 ?
                    <><div className="moviesSection">
                        {filterData.map((item, idx) => <Card key={idx} data={item} onBookmark={onBookmark} bookmarks={bookmarks}/>)}
                    </div>
                        {filterData.length === 12 ? <Pagination itemPerPage={12} totalItems={250} pageName="movies"/> : null}
                    </> :
                    <ResultNotFound userSearch={userSearch} bookmarks={bookmarks} onBookmark={onBookmark}/>
                }
            </section>
        </>
    );
}
 
export default MoviePage;
