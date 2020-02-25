import React from "react"
import ToDoItem from "./ToDoItem"

export default function ToDosContainer(props) {
    const todos = props.items
    const toDoItems = todos.map(el => {
        return (<ToDoItem item={el} key={el.text} />)
    })
    return (
        <div className="todos-container">
            <form className="todo-form">
                <label className="input-item">
                    <input type="text" name="todo" />
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
