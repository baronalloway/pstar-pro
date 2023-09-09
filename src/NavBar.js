import {Link} from 'react-router-dom';
import logo from './img/logo-main.png';

function NavBar() {
    return (
        <nav className="navbar sticky" role="navigation" aria-label="main navigation" style={{boxShadow: "0 10px 10px rgb(0 0 0 / 0.2)", marginBottom: 15}}>
            <div className="navbar-brand">
                <a className="navbar-item" href="#">
                    <img src={logo} width="112" height="28"/>
                </a>

                <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                    <Link to="/" className="navbar-item">
                        Quiz
                    </Link>

                    <Link to="/score" className="navbar-item">
                        About
                    </Link>

                    
                </div>
            </div>
        </nav>);
}

export default NavBar;