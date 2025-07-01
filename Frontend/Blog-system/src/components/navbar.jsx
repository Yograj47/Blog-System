import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function NavBar() {
    
    return (
        <>
            <nav className="navbar">
                <div className="brand">
                    <a href="/">Techgraphy</a>
                </div>
                <div className="navbar-menu">
                    <ul className="links">
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>
                <div className="navbar-other">

                    <div className="navbar-search">
                        <input type="text" placeholder="Search..." />
                        <button type="submit">
                            <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
                        </button>
                    </div>
                    <div className="navbar-actions">
                        <a href="/login" className="btn btn-primary">Login</a>
                        <a href="/register" className="btn btn-secondary">Register</a>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default NavBar;