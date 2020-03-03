import React from "react"
import ToDoneItem from "./ToDoneItem"

export default function ToDonesContainer(props) {
    const todones = props.items
    const toDoneItems = todones && todones.map(el => {
        return (<ToDoneItem item={el} key={el.text} updateItem={props.updateItem} />)
    })

    return (
        <div className="todones-container">

            <div className="todones">
                <h3>Backlog:</h3>
                {toDoneItems}
            </div>
        </div>
    )
}