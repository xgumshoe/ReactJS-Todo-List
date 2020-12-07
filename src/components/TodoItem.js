import React from 'react'

function TodoItem({ item, toggleTodo, deleteTodo }) {
const completedStyle = {
    fontStyle: "italic",
    color: "#cdcdcd",
    textDecoration: "line-through"
}

    return (
        <div className="todo-item">
            <input
                type="checkbox"
                checked={item.completed}
                onChange={() => toggleTodo(item.id)}
            />
            <p style={item.completed ? completedStyle:null}>{item.text}</p>
            <button onClick={() => deleteTodo(item.id)}>Delete</button>
        </div>
    )
}

export default TodoItem