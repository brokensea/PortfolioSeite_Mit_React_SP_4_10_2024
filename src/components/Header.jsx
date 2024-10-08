import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="bg-gray-800 text-white p-4">
            <h1 className="text-4xl font-bold">Mein Portfolio</h1>
            <nav>
                <ul className="flex space-x-4">
                    <li><Link to="/" className="link hover:text-gray-400">Über mich</Link></li>
                    <li><Link to="/projects" className="link hover:text-gray-400">Projekte</Link></li>
                    <li><Link to="/contact" className="link hover:text-gray-400">Kontakt</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
