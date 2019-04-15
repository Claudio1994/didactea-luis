/* Libraries */
import React, { Component } from 'react';

/* css */
import '../../css/home.css';
import '../../css/aurora-pack.min.css';
import '../../css/aurora-theme-base.min.css';
import '../../css/urku.css';

/* images */
import faceIcon from '../../img/facebook.png';

class Footer extends Component {
    render(){
        return(
            <footer className="ae-container-fluid rk-footer ">
            <div className="ae-grid ae-grid--collapse">
                <div className="ae-grid__item item-lg-4 au-xs-ta-center au-lg-ta-left">
                    <p className="rk-footer__text rk-footer__copy "> <span className="ae-u-bold">© </span><span className="ae-u-bolder">Juguestes Didactea </span>Todos los derechos reservados.</p>
                </div>
                <div className="ae-grid__item item-lg-4 au-xs-ta-center">
                    <a href="https://www.facebook.com/Juguetes-Didactea-385429638896603/">
                        <img src={faceIcon} height="50px" width="50px" alt="imagen de facebook"></img>
                    </a>
                </div>
                <div className="ae-grid__item item-lg-4 au-xs-ta-center au-lg-ta-right">
                    <p className="rk-footer__text rk-footer__contact "> <span className="ae-u-bold">Correo: </span><span className="ae-u-bolder rk-dark-color ">luissepulveda07@gmail.com</span></p>
                </div>
            </div>
            </footer>
        );
    }
}

export default Footer;