import React from 'react';
import './header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="header__title">
                <a href="#0">
                Game of Thrones DB
                </a>
            </div>
            <div className="header__links">
                <li>
                    <a href="#1">Characters</a>
                </li>
                <li>
                    <a href="#2">Houses</a>
                </li>
                <li>
                    <a href="#3">Books</a>   
                </li>
            </div>
        </div>
    );
};

export default Header;