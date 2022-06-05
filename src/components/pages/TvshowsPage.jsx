import "../../style/css/tvshowspage.css";
import Card from "../Card";
import tvshows from "../../json/tvshows.json";
import SearchBar from "../SearchBar";
import ResultNotFound from "../ResultNotFound";
import { useState } from "react";
import Pagination from "../Pagination";

const TvShowspage = ({onBookmark, bookmarks}) => {
    const [userSearch, setUserSearch] = useState("");
    const [pageNumber, setPageNumber] = useState(1);

    const handleUserInput = (input) => {
        setUserSearch(input);
    };

    const handlePageChange = (pageNumber) => {
        setPageNumber(pageNumber);
    };
    let filterData = tvshows.slice((pageNumber - 1) * 12 , pageNumber * 12);
    if (userSearch) {
        filterData = filterData.filter(item => item.Title.toLowerCase().startsWith(userSearch));
    }

    return ( 
        <>
            <SearchBar onUserSubmit={handleUserInput} placeholderText="Search TV Show By Name"/>
            <section className="section">
                {userSearch ? filterData.length !== 0 ? <p className="showResult">Show result <span>{userSearch}</span></p> : null : null}
                {filterData.length !== 0 ?
                    <><div className="tvshowSection">
                        {filterData.map((item, idx) => <Card key={idx} data={item} onBookmark={onBookmark} bookmarks={bookmarks}/>)}
                    </div>
                    <Pagination onPageChange={handlePageChange} itemPerPage={12} totalItems={250}/>
                    </> :
                    <ResultNotFound userSearch={userSearch} bookmarks={bookmarks} onBookmark={onBookmark}/>
                }
            </section>
        </>
    );
}
 
export default TvShowspage;
