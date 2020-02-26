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
        { id: 0, text: "Make the best snare", done: true },
        { id: 1, text: "Fletcher the sub", done: false },
        { id: 2, text: "Check for peakybois", done: false },
        { id: 3, text: "Mono your Sub", done: false },
        { id: 4, text: "Compress your side signal", done: false },
        { id: 5, text: "Be innovative", done: true }
      ]
    }
  }
  updateItem = id => {
    const newState = this.state.items.map(item => {
      if (item.id === id) {
        item.done = !item.done
        return item
      } else {
        return item
      }
    })
    this.setState({ items: newState })
  }


  addItem = (newItem) => {
    let item = ({ id: this.state.items.length, text: newItem, done: false })
    this.setState({
      items: [...this.state.items, item]
    })
  }

  render() {
    const toDos = this.state.items.filter(el => !el.done)
    const toDones = this.state.items.filter(el => el.done)
    return (
      <div className="app">
        <Navigation />
        <ToDosContainer items={toDos} updateItem={this.updateItem} addItem={this.addItem} />
        <ToDonesContainer items={toDones} updateItem={this.updateItem} />
      </div>
    )
  }
}
