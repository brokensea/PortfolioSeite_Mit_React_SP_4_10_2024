import React from 'react';
import '../styles/Header.css';

function Header() {
    return (
        <header className="header">
            <h1>Mein Portfolio</h1>
            <nav>
                <ul>
                    <li><a href="#about">Über mich</a></li>
                    <li><a href="#projects">Projekte</a></li>
                    <li><a href="#contact">Kontakt</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;