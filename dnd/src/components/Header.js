import React from 'react';
import Banner from '../ddbanner.png';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <img src={Banner} alt="DnD logo"/>
            <nav>
                <NavLink exact to="/">Home</NavLink>
                <NavLink to="/create">Character Creator</NavLink>
                <NavLink to="/sheet">Character Sheet</NavLink>
            </nav>
        </header>
    )
}

export default Header;