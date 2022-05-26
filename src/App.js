import './App.css';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import DetailsCard from './components/DetailCard';
import HomePage from './components/HomePage';
import data from "./json/movies.json";


function App() {

  return (
    <>
      <NavBar/>
      <SearchBar/>
      <HomePage/>
      {/* <DetailsCard data={data1}/> */}
    </>
  );
}

export default App;
