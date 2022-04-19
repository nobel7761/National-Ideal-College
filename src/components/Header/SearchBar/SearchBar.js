import React from 'react';
import { Form } from 'react-bootstrap';
import './SearchBar.css';

const SearchBar = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
    }
    return (
        <div className='container'>
            <div className="search-container">
                <Form className="d-flex">
                    <input type="text" name="" className='search-input' placeholder='Search Here...' />
                    <button type="submit" className='search-button' onClick={handleSubmit}>SEARCH</button>
                </Form>
            </div>
        </div>
    );
};

export default SearchBar;