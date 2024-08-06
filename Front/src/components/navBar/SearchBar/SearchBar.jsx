import React from "react";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import styles from './NavBar.module.css'

export const SearchBar = ()=>{
    return(
        <body>
            <div>
            <div className={styles.searchbar_container}>
                    <Box
                        component="form"
                        sx={{
                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off">
                    <TextField
                        label="Search"
                        id="standard-size-small"
                        defaultValue=""
                        size="small"
                        variant="standard"
                    />
                    </Box>
                        <SearchRoundedIcon/>
                </div>
            </div>
        </body>
    )
}