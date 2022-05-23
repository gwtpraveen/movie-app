import './App.css';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import SpecialCard from './components/SpecialCard';
import Card from './components/Card';

function App() {
  const data = {"Title":"Encanto","Year":"2021","Rated":"PG","Released":"24 Nov 2021","Runtime":"102 min","Genre":"Animation, Comedy, Family","Director":"Jared Bush, Byron Howard, Charise Castro Smith","Writer":"Charise Castro Smith, Jared Bush, Byron Howard","Actors":"Stephanie Beatriz, María Cecilia Botero, John Leguizamo","Plot":"A Colombian teenage girl has to face the frustration of being the only member of her family without magical powers.","Language":"English, Spanish","Country":"United States","Awards":"Won 1 Oscar. 40 wins & 76 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BNjE5NzA4ZDctOTJkZi00NzM0LTkwOTYtMDI4MmNkMzIxODhkXkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.2/10"},{"Source":"Metacritic","Value":"75/100"}],"Metascore":"75","imdbRating":"7.2","imdbVotes":"190,425","imdbID":"tt2953050","Type":"movie","DVD":"N/A","BoxOffice":"$96,093,622","Production":"Disney","Website":"N/A","Response":"True"}

  return (
    <>
      <NavBar/>
      <SearchBar/>
      <Card data={data}/>
      <SpecialCard data={data}/>
    </>
  );
}

export default App;
