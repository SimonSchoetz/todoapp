import React, { Component } from 'react';
import "../css/App.scss";
import Navigation from './Navigation';
import ToDosContainer from './ToDosContainer';
import ToDonesContainer from './ToDonesContainer'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [
        { text: "Make the best snare", done: true },
        { text: "Fletcher the sub", done: false },
        { text: "Check for peakybois", done: false },
        { text: "Mono your Sub", done: false },
        { text: "Compress your side signal", done: false },
        { text: "Be innovative", done: true }
      ]
    }
  }
  render() {
    const toDos = this.state.items.filter(el => !el.done)
    const toDones = this.state.items.filter(el => el.done)
    return (
      <div className="app">
        <Navigation />
        <ToDosContainer items={toDos} />
        <ToDonesContainer items={toDones} />
      </div>
    )
  }
}
