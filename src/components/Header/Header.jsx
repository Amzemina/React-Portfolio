import  { Link } from 'react-router-dom';
import "./Header.css"

function Header() {
    return (
        <header>
            <h1>Ashley Zemina</h1>

            <nav>
                <ul className="nav-bar">
                    <li>
                        <Link to="/">
                            About Me
                        </Link>
                    </li>
                    <li>
                        <Link to="/portfolio">
                            Portfolio
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact">
                            Contact
                        </Link>
                    </li>
                    <li>
                        <Link to="/resume">
                            Resume
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
