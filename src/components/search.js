import React, {useState} from 'react';

// create a search input to search and pull back results from the API
const Search = (props) => {
    const [searchValue, setSearchValue] = useState("");
    
    const handleSearchInputChanges = (e) => {
        setSearchValue(e.target.value);
    }

    const resetInputField = () => {
        setSearchValue("")
    }

    const callSearchFunction = (e) => {
        e.preventDefault();
        props.search(searchValue);
        resetInputField();
    }
    // return the header and the input type
    return (
        <form className="search">
            <h1>Movie Reviews</h1>
            <input
            value={searchValue}
            onChange={handleSearchInputChanges}
            type="text"
            />
            {/* create a button to submit the search */}
            <input onClick ={callSearchFunction} className="btn btn-primary" id="searchButton" type="buttonSearch" value="SEARCH" />
        </form>
    );
}

export default Search;