import React from 'react';
import './App.css';

import { connect } from 'react-redux'

import CatGenerator from './components/CatGenerator'
import Nav from './components/Nav'

function App(props) {
  return (
    <div className="App">
      <Nav />
      <CatGenerator catImgSrc={props.catImgSrc} fetchInitiated={props.fetchInitiated} catQuote={props.catQuote}/>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    catImgSrc: state.catImgSrc,
    fetchInitiated: state.fetchInitiated,
    catQuote: state.catQuote,
  }
}

export default connect(mapStateToProps, {})(App);
