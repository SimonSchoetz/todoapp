import React, { Component } from "react"
import ToDoItem from "./ToDoItem"

export default class ToDosContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            UserInput: ""
        }
    }
    setNewItem = (e) => {
        this.setState({
            UserInput: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        if (this.state.UserInput.trim() !== "") {
            //calls addItem on App.js
            this.props.addItem(this.state.UserInput)
            //Clearing UserInput to empty the input field after submitting
            this.setState({
                UserInput: ""
            })

        }

    }


    render() {
        const todos = this.props.items
        const toDoItems = todos && todos.map(el => {
            return (<ToDoItem item={el} key={el.text} updateItem={this.props.updateItem} />)
        })
        return (
            <div className="todos-container" >
                <form className="todo-form" onSubmit={this.handleSubmit} >
                    <label className="input-item">
                        <input value={this.state.UserInput} type="text" name="todo" onChange={this.setNewItem} />
                    </label>
                    <input type="submit" className="btn" value="ADD" />
                </form>
                <div className="todos">
                    <h3>To Do:</h3>
                    {toDoItems}
                </div>
            </div>
        )
    }
}
