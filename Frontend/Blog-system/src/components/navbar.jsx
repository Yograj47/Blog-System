import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav className="nav">
            <div className="nav__brand">
                <a href="/">Techgraphy</a>
            </div>

            <div className="nav__menu">
                <ul className="nav__links">
                    <li>
                        <Link to="/" className="nav__link">Home</Link>
                    </li>
                    <li>
                        <Link to="/about" className="nav__link">About</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="nav__link">Contact</Link>
                    </li>
                    <li>
                        <Link to="/test" className="nav__link">Test Form</Link>
                    </li>
                </ul>
            </div>

            <div className="nav__right">
                <div className="nav__search">
                    <input type="text" placeholder="Search..." />
                    <button type="submit">
                        <FontAwesomeIcon icon={faMagnifyingGlass} className="nav__search-icon" />
                    </button>
                </div>

                <div className="nav__actions">
                    <a href="/login" className="nav__btn nav__btn--primary">Login</a>
                    <a href="/register" className="nav__btn nav__btn--secondary">Register</a>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
