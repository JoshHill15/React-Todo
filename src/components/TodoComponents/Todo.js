import React from "react"
import "./Todo.css"

const Todo = props => {
    const { task, completed } = props.cv
    return (
        <div className = {completed === true ? "comp" : ""} onClick = {() => props.toggle(task)} >
            <p className = "item">{task}</p>
        </div>
    )
}

export default Todo