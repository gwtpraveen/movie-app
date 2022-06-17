import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import DetailsCard from "./components/pages/DetailCard";
import HomePage from "./components/pages/HomePage";
import MoviePage from "./components/pages/MoviePage";
import TvShowspage from "./components/pages/TvshowsPage";
import BookmarkPage from "./components/pages/Bookmark";
import NotFound from "./components/pages/NotFound";
import ToTop from "./components/ToTop";
import ContactUs from "./components/pages/ContactUs";
import { useState } from "react";

function App() {
  const [movieBookmark, setMovieBookmark] = useState([]);
  const [seriesBookmark, setSeriesBookmark] = useState([]);

  const handleBookmark = (movieId, type) => {
    if (type === "movie") {
      if (!movieBookmark.includes(movieId)) {
        setMovieBookmark((prevVal) => [...prevVal, movieId]);
      } else {
        setMovieBookmark((prevVal) =>
          prevVal.filter((item) => item !== movieId)
        );
      }
    }

    if (type === "series") {
      if (!seriesBookmark.includes(movieId)) {
        setSeriesBookmark((prevVal) => [...prevVal, movieId]);
      } else {
        setSeriesBookmark((prevVal) =>
          prevVal.filter((item) => item !== movieId)
        );
      }
    }
  };

  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              onBookmark={handleBookmark}
              movieBookmark={movieBookmark}
              seriesBookmark={seriesBookmark}
            />
          }
        />
        <Route
          path="/movies/:page"
          element={
            <MoviePage onBookmark={handleBookmark} bookmarks={movieBookmark} />
          }
        />
        <Route
          path="/tvshows"
          element={
            <TvShowspage
              onBookmark={handleBookmark}
              bookmarks={seriesBookmark}
            />
          }
        />
        <Route
          path="/bookmark"
          element={
            <BookmarkPage
              seriesBookmark={seriesBookmark}
              movieBookmark={movieBookmark}
              onBookmark={handleBookmark}
            />
          }
        />
        <Route path="/home/details/:type/:id" element={<DetailsCard />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToTop />
    </>
  );
}

export default App;
