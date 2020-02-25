import React, { Component } from 'react';
import "../css/App.scss";
import Navigation from './Navigation';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Navigation />
      </div>
    )
  }
}
