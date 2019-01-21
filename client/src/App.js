import React, { Component } from 'react';

import Header from './Components/header';
import Main from './Components/main';
import Footer from './Components/footer';
import PropTypes from 'prop-types';



class App extends Component {

  render() {
    const { children } = this.props;
    return (
      <div className="top-fixed">
        <Header></Header>
        <Main body={children}></Main>
        <Footer></Footer>
      </div>
    ); //fin render
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
}

export default App;
