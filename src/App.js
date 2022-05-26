import './App.css';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import DetailsCard from './components/DetailCard';
import HomePage from './components/HomePage';
import MoviePage from './components/MoviePage';
import TvShowspage from './components/tvshowsPage';


function App() {

  return (
    <>
      <NavBar/>
      <SearchBar/>
      {/* <HomePage/> */}
      {/* <MoviePage/> */}
      <TvShowspage/>
      {/* <DetailsCard data={data1}/> */}
    </>
  );
}

export default App;
