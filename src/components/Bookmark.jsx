import Card from "./Card";
import movies from "../json/movies.json";
import tvShows from "../json/tvshows.json";
import "../style/css/bookmarkpage.css"

const BookmarkPage = ({seriesBookmark, movieBookmark, onBookmark}) => {
    return ( 
        <div className="bookmarkPage">
            <section className='section'>
                <h2 className='TitleH2'>Bookmarked Movies</h2>
                <div className='card-container'>
                    {movies.filter(item => movieBookmark.includes(item.imdbID))
                        .map(item => <Card data={item} key={item.imdbID} onBookmark={onBookmark} bookmarks={movieBookmark}/>)
                    }
                </div>
            </section>
            <section className='section'>
                <h2 className='TitleH2'>Bookmarked TV Shows</h2>
                <div className='card-container'>
                    {tvShows.filter(item => seriesBookmark.includes(item.imdbID))
                        .map(item => <Card data={item} key={item.imdbID} onBookmark={onBookmark} bookmarks={seriesBookmark}/>)
                    }
                </div>
            </section>
        </div>
     );
}
 
export default BookmarkPage;