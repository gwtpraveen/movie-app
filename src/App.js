import './App.css';
import {Routes, Route} from "react-router-dom";
import NavBar from './components/NavBar';
import DetailsCard from './components/DetailCard';
import HomePage from './components/HomePage';
import MoviePage from './components/MoviePage';
import TvShowspage from './components/tvshowsPage';
import { useState } from 'react';

function App() { 
  const [movieBookmark, setMovieBookmark] = useState([]);
  const [seriesBookmark, setSeriesBookmark] = useState([]);

  const handleBookmark = (title, type) => {
    if (type === "movie") {
      if (!movieBookmark.includes(title)) {
        setMovieBookmark(prevVal => [...prevVal, title]);
      } else {
        setMovieBookmark(prevVal => prevVal.filter(item => item !== title));
      }
    }

    if (type === "series") {
      if (!seriesBookmark.includes(title)) {
        setSeriesBookmark(prevVal => [...prevVal, title]);
      } else {
        setSeriesBookmark(prevVal => prevVal.filter(item => item !== title));
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
        <Route path='/bookmark' element={<h1>bookmark</h1>}/>
      {/* <DetailsCard data={data1}/> */}
    </Routes>
    </>
  );
}

export default App;
