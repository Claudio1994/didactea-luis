import React, { Component } from 'react';

import Header from './Components/header';
import MainContainer from './Components/main';
import Footer from './Components/footer';

class App extends Component {

  render() {
    return (
      <div className="top-fixed">
        <Header></Header>
        <MainContainer></MainContainer>
        <Footer></Footer>
      </div>
    ); //fin render
  }
}

export default App;
