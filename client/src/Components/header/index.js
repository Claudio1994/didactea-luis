/* Libraries */
import React,{Component} from 'react';
import { Link } from 'react-router-dom';

/* css */
import '../../css/home.css';
import '../../css/aurora-pack.min.css';
import '../../css/aurora-theme-base.min.css';
import '../../css/urku.css';


class Header extends Component{
    render(){
        return(
            <header className={`ae-container-fluid ae-container-fluid--full rk-header bgColorRebeccapurple`}>
                <div className="ae-container-fluid rk-topbar">
                    <h1 className={`rk-logo colorWhite`} ><Link to="/">Juguestes didactea</Link></h1>
                    <nav className="rk-navigation">
                        <ul className="rk-menu">
                            <li className={`active rk-menu__item colorWhite`}>
                                <div className="rk-menu__link">
                                    <Link to="/">Inicio</Link>
                                </div>
                            </li>
                            <li className={`rk-menu__item colorWhite`}>
                                <div className="rk-menu__link">
                                    <Link to="/contact">Contacto</Link>
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        );
    }
}

export default Header;
