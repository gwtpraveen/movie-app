import './App.css';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import DetailsCard from './components/DetailCard';
import HomePage from './components/HomePage';
import MoviePage from './components/MoviePage';
import TvShowspage from './components/tvshowsPage';
import Pagination from './components/pagination';


function App() {

  return (
    <>
      <NavBar/>
      <SearchBar/>
      <Pagination totalItems={250} itemPerPage={25}/>
      {/* <HomePage/> */}
      {/* <MoviePage/> */}
      {/* <TvShowspage/> */}
      {/* <DetailsCard data={data1}/> */}
    </>
  );
}

export default App;
