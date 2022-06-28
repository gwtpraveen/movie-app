import "../../style/css/tvshowspage.css";
import Card from "../Card";
import tvshows from "../../json/tvshows.json";
import SearchBar from "../SearchBar";
import Result from "../Result";
import { useState } from "react";
import Pagination from "../Pagination";
import { useParams } from "react-router-dom";

const TvShowspage = ({onBookmark, bookmarks}) => {
    const [userSearch, setUserSearch] = useState("");
    let params = useParams();
    let pageNumber = params.page;

    const handleUserInput = (input) => {
        setUserSearch(input);
    };

    let filterData = tvshows.slice((pageNumber - 1) * 12 , pageNumber * 12);
    if (userSearch) {
        filterData = filterData.filter(item => item.Title.toLowerCase().startsWith(userSearch));
    }

    return ( 
        <>
            <SearchBar onUserSubmit={handleUserInput} placeholderText="Search TV Show By Name"/>
            <section className="section">
                <section className="section">
                {userSearch ? filterData.length !== 0 ? <><a href="/movies/1">Back</a><p className="showResult">Show result <span>{userSearch}</span></p></> : null : null}
                {filterData.length !== 0 ?
                    <><div className="moviesSection">
                        {filterData.map((item, idx) => <Card key={idx} data={item} onBookmark={onBookmark} bookmarks={bookmarks}/>)}
                    </div>
                        {filterData.length === 12 ? <Pagination itemPerPage={12} totalItems={250} pageName="movies"/> : null}
                    </> :
                    <Result userSearch={userSearch} bookmarks={bookmarks} onBookmark={onBookmark}/>
                }
            </section>
            </section>
        </>
    );
}
 
export default TvShowspage;
