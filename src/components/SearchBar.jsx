import "../style/css/searchbar.css";

const SearchBar = ({onUserSubmit, placeholderText}) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const inputFeild = e.target.firstElementChild.lastElementChild;
        onUserSubmit(inputFeild.value.toLowerCase());
        inputFeild.value = null;
    }

    return ( 
        <form className="search" onSubmit={handleSubmit}>
            <div className="form-group">
                <i class="fa-solid fa-magnifying-glass search-icon"></i>
                <input type="text" name="userSearch" placeholder={placeholderText} className="search-input" autoComplete="off"/>
            </div>
        </form>
     );
}
 
export default SearchBar;