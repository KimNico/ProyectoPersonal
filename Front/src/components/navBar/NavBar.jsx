import React from "react";
import styles from './NavBar.module.css'
import { NavLink } from 'react-router-dom';
import { SearchBar } from "./SearchBar";


export const NavBar = ()=>{
    return(
        <body>
            <div>
                        <div>
                            <NavLink to="/login">Ingresar</NavLink>
                            <NavLink to="/registrarme">Registrarme</NavLink>
                        </div>
                <SearchBar/>
            </div>
        </body>
    )
}