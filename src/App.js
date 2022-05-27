import './App.css';
import {Routes, Route} from "react-router-dom";
import NavBar from './components/NavBar';
import DetailsCard from './components/DetailCard';
import HomePage from './components/HomePage';
import MoviePage from './components/MoviePage';
import TvShowspage from './components/tvshowsPage';
import BookmarkPage from './components/Bookmark';
import NotFound from './components/NotFound';
import { useState } from 'react';

function App() { 
  const [movieBookmark, setMovieBookmark] = useState([]);
  const [seriesBookmark, setSeriesBookmark] = useState([]);

  const handleBookmark = (movieId, type) => {
    if (type === "movie") {
      if (!movieBookmark.includes(movieId)) {
        setMovieBookmark(prevVal => [...prevVal, movieId]);
      } else {
        setMovieBookmark(prevVal => prevVal.filter(item => item !== movieId));
      }
    }

    if (type === "series") {
      if (!seriesBookmark.includes(movieId)) {
        setSeriesBookmark(prevVal => [...prevVal, movieId]);
      } else {
        setSeriesBookmark(prevVal => prevVal.filter(item => item !== movieId));
      }
    }
  };

  return (
    <>
    <NavBar/>
    <Routes>
        <Route path='/' element={<HomePage onBookmark={handleBookmark} movieBookmark={movieBookmark} seriesBookmark={seriesBookmark}/>}/>
        <Route path="/home" element={<HomePage onBookmark={handleBookmark} movieBookmark={movieBookmark} seriesBookmark={seriesBookmark}/>}/>
        <Route path='/movies' element={<MoviePage onBookmark={handleBookmark} bookmarks={movieBookmark}/>}/>
        <Route path='/tvshows' element={<TvShowspage onBookmark={handleBookmark} bookmarks={seriesBookmark}/>}/>
        <Route path='/bookmark' element={<BookmarkPage seriesBookmark={seriesBookmark} movieBookmark={movieBookmark} onBookmark={handleBookmark}/>}/>
        <Route path='*' element={<NotFound/>}/>
      {/* <DetailsCard data={data1}/> */}
    </Routes>
    </>
  );
}

export default App;
