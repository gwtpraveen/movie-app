const SearchBar = (props) => {
    return ( 
        <form method="post">
            <div className="form-group">
                <img src="./images/icons/icon-search.svg" alt="search icon" />
                <input type="text" name="userSearch" placeholder="Search from movies or TV series"/>
            </div>
        </form>
     );
}
 
export default SearchBar;