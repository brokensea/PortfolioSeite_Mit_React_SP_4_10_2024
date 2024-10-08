import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
    return (
        <header className="header">
            <h1 className="text-4xl font-bold">Mein Portfolio</h1>
            <nav>
                <ul className="flex space-x-4">
                    <li><Link to="/">Über mich</Link></li>
                    <li><Link to="/projects">Projekte</Link></li>
                    <li><Link to="/contact">Kontakt</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;