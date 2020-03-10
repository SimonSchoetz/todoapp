import React, { Component } from 'react';
import "../css/App.scss";
import Navigation from './Navigation';
import ToDosContainer from './ToDosContainer';
import ToDonesContainer from './ToDonesContainer';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Help from '../views/Help';
import PageNotFound from '../views/PageNotFound';
export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: []
    }
  }

  componentDidMount() {
    let data = localStorage.getItem("todo-list")
    let items = JSON.parse(data)
    if (items) {
      this.setState({ items }) //because "let items" has the same name as this.state.items, React knows it is the same as items: items
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
    this.setState({ items: newState }, () => {
      this.updateLocalStorage()
    })
  }

  addItem = (newItem) => {
    let item = ({ id: this.state.items.length, text: newItem, done: false })
    this.setState({ //this.setState is asynchronous code....
      items: [...this.state.items, item]
    }, () => { //... thats why we use this way to execute the code after this.setState is done

      this.updateLocalStorage()
    })

  }

  updateLocalStorage = () => {
    localStorage.setItem("todo-list", JSON.stringify(this.state.items))
  }

  render() {
    const toDos = this.state.items && this.state.items.filter(el => !el.done)
    const toDones = this.state.items && this.state.items.filter(el => el.done)
    return (
      <Router>
        <div className="app">
          <Navigation />
          <Switch>
            <Route exact path="/">
              <ToDosContainer items={toDos} updateItem={this.updateItem} addItem={this.addItem} />
              <ToDonesContainer items={toDones} updateItem={this.updateItem} />
            </Route>
            <Route exact path="/help">
              <Help />
            </Route>
            <Route>
              <PageNotFound />
            </Route>
          </Switch>
        </div>




      </Router>
    )
  }
}
