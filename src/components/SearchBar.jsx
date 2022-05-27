import "../style/css/searchbar.css";

const SearchBar = ({onUserSubmit, placeholderText}) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const inputFeild = e.target.firstElementChild.lastElementChild;
        onUserSubmit(inputFeild.value.toLowerCase());
        inputFeild.value = null;
    }

    return ( 
        <form method="post" className="search" onSubmit={handleSubmit}>
            <div className="form-group">
                <img src="./images/icons/icon-search.svg" alt="search icon" className="search-icon"/>
                <input type="text" name="userSearch" placeholder={placeholderText} className="search-input"/>
            </div>
        </form>
     );
}
 
export default SearchBar;