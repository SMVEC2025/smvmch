import React from 'react';

const SearchWidget = () => {

    const handleSearch = (event) => {
        event.preventDefault()
        event.target.reset()
    }

    return (
        <>
            <div className="search-field">
                <form onSubmit={handleSearch}>
                    <input placeholder="search ...." type="text" name="search" />
                    <button type="submit"><i className="fa fa-search"></i></button>
                </form>
            </div>
        </>
    );
};

export default SearchWidget;