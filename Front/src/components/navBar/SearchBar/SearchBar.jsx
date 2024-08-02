import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import styles from '../NavBar.module.css';

export const SearchBar = () => {
    const [query, setQuery] = useState('');

    const handleChange = (event) => {
        setQuery(event.target.value);
    };

    const handleSearch = () => {
        // Add your search logic here
        console.log('Searching for:', query);
    };

    return (
        <div className={styles.searchBarContainer}>
            <TextField
                variant="outlined"
                placeholder="Search..."
                size="small"
                value={query}
                onChange={handleChange}
                onKeyPress={(event) => {
                    if (event.key === 'Enter') {
                        handleSearch();
                    }
                }}
                className={styles.searchBar}
            />
            <button onClick={handleSearch} className={styles.searchButton}>
                Search
            </button>
        </div>
    );
};
