import React, { Component } from 'react';
import axios from 'axios';

import styles from './css/home.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      images: []
    }

    this.getImages();
  }

  getImages = () => {
    axios.get('/api/product/')
      .then((data)=>{
        this.setState({
          images: data.data.products
        });
      })
      .catch((error) =>{
        console.log(error);
      });
  }

  render() {
    return (
      <div class="top-fixed">
        <header className={`ae-container-fluid ae-container-fluid--full rk-header ${styles.bgColorRebeccapurple}`}>
          <input type="checkbox" id="mobile-menu" class="rk-mobile-menu"/>
          <label for="mobile-menu">
            <svg>
              <use href="assets/img/symbols.svg#bar"></use>
            </svg>
            <svg>
              <use href="assets/img/symbols.svg#bar"></use>
            </svg>
            <svg>
              <use href="assets/img/symbols.svg#bar"></use>
            </svg>
          </label>
          <div class="ae-container-fluid rk-topbar">
            <h1 className={`rk-logo ${styles.colorWhite}`} ><a href="index.html">Juguetes Didactea</a></h1>
            <nav class="rk-navigation">
              <ul class="rk-menu">
                <li className={`active rk-menu__item ${styles.colorWhite}`}><a href="index.html" class="rk-menu__link">Inicio</a>
                </li>
                <li class={`rk-menu__item ${styles.colorWhite}`}><a href="contact.html" class="rk-menu__link">Contacto</a>
                </li>
              </ul>
              <form class="rk-search">
                <input type="text" placeholder="Search" id="urku-search" class="rk-search-field"/>
                <label for="urku-search">
                  <svg>
                    <use href="assets/img/symbols.svg#icon-search"></use>
                  </svg>
                </label>
              </form>
            </nav>
          </div>
        </header>
        <section class="ae-container-fluid rk-main">
        <section class={`ae-container-fluid ae-container-fluid--inner rk-portfolio ${styles.marginTop15}`}>
        <div  class="ae-masonry ae-masonry-md-2 ae-masonry-xl-4">

          {
          this.state.images && 
          this.state.images.map((image)=>{
          return(
            <a key="image.id" href="portfolio-item.html" class="rk-item ae-masonry__item">
              <img src={`data:${image.contetType};base64,${image.image}`} alt=""/>
              <div class="item-meta">
                <h2>{image.name}</h2>
                <p>{image.description}</p>
              </div>
            </a>);
          
          })
          }
        </div>
        </section>
        </section>
        <footer class="ae-container-fluid rk-footer ">
          <div class="ae-grid ae-grid--collapse">
            <div class="ae-grid__item item-lg-4 au-xs-ta-center au-lg-ta-left">
              <p class="rk-footer__text rk-footer__copy "> <span class="ae-u-bold">© </span><span class="ae-u-bolder">Juguestes Didactea </span>Todos los derechos reservados.</p>
            </div>
            <div class="ae-grid__item item-lg-4 au-xs-ta-center">
              <a href="https://www.facebook.com/Juguetes-Didactea-385429638896603/">
                <img src="/img/facebook.png" height="50px" width="50px"></img>
              </a>
            </div>
            <div class="ae-grid__item item-lg-4 au-xs-ta-center au-lg-ta-right">
              <p class="rk-footer__text rk-footer__contact "> <span class="ae-u-bold">Email: </span><span class="ae-u-bolder"> <a href="#0" class="rk-dark-color ">contacto@gmail.com </a></span></p>
            </div>
          </div>
        </footer>
      </div>
    ); //fin render
  }
}

export default App;
