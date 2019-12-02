import React from "react"
import "./Todo.css"

const Todo = props => {
    console.log(props)
    const { task, completed } = props.cv
    return (
        <div className = {completed === true ? "comp" : ""} >
            <p onClick = {() => props.toggle(task)}>{task}</p>
        </div>
    )
}

export default Todo