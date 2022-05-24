import "../style/css/searchbar.css";

const SearchBar = (props) => {
    return ( 
        <form method="post" className="search">
            <div className="form-group">
                <img src="./images/icons/icon-search.svg" alt="search icon" className="search-icon"/>
                <input type="text" name="userSearch" placeholder="Search from movies or TV series" className="search-input"/>
            </div>
        </form>
     );
}
 
export default SearchBar;