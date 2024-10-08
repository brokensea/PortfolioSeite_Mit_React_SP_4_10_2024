<<<<<<< HEAD
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
=======
import { Link } from 'react-router-dom';
function Header() {
    return (
        <header className="bg-gray-800 text-white p-4">
            <h1 className="text-4xl font-bold">Mein Portfolio</h1>
            <nav>
                <ul className="flex space-x-4">
                    <li><Link to="/" className="hover:text-gray-400">Über mich</Link></li>
                    <li><Link to="/projects" className="hover:text-gray-400">Projekte</Link></li>
                    <li><Link to="/contact" className="hover:text-gray-400">Kontakt</Link></li>
>>>>>>> 460db07 (Router and Tailwind css basic)
                </ul>
            </nav>
        </header>
    );
}
export default Header;