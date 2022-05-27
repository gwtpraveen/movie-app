import Card from "./Card";
import movies from "../json/movies.json";
import tvShows from "../json/tvshows.json";
import "../style/css/bookmarkpage.css"

const BookmarkPage = ({seriesBookmark, movieBookmark, onBookmark}) => {
    return ( 
        <div className="bookmarkPage">
            {seriesBookmark.length + movieBookmark.length !== 0 ? <>
            <section className='section'>
                {movieBookmark.length !== 0 ? <>
                    <h2 className='TitleH2'>Bookmarked Movies</h2>
                    <div className='card-container'>
                        {movies.filter(item => movieBookmark.includes(item.imdbID))
                            .map(item => <Card data={item} key={item.imdbID} onBookmark={onBookmark} bookmarks={movieBookmark}/>) 
                        }
                    </div></> : null}
            </section>
            <section className='section'>
                {seriesBookmark.length !== 0 ? <>
                    <h2 className='TitleH2'>Bookmarked TV Shows</h2>
                    <div className='card-container'>
                        {tvShows.filter(item => seriesBookmark.includes(item.imdbID))
                            .map(item => <Card data={item} key={item.imdbID} onBookmark={onBookmark} bookmarks={seriesBookmark}/>)
                        }
                    </div></> : null}
            </section>
            </> : <h2 className="nobookmark">No Bookmarks</h2>}
        </div>
     );
}
 
export default BookmarkPage;