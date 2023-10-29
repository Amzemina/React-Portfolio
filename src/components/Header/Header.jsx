import  { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <h1>
                <Link to="/">Ashley Zemina</Link>
            </h1>
            <nav>
                <ul className="nav-bar">
                    <li className="about-me">
                        <Link to="/">
                            About Me
                        </Link>
                    </li>
                    <li className="portfolio">
                        <Link to="/portfolio">
                            Portfolio
                        </Link>
                    </li>
                    <li className="contact">
                        <Link to="/contact">
                            Contact
                        </Link>
                    </li>
                    <li className="resume">
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
