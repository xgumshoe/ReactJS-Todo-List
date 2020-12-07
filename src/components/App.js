import React, { useState } from 'react'
import '../index.css'
import TodoItem from './TodoItem'

function App() {
    const [todos, setTodos] = useState([])
    const [todo, setTodo] = useState("")

    const handleChange = e => {
        setTodo(e.target.value)
    }

    const onSubmit = e => {
        e.preventDefault();
        if(todo === "") return

        addTodo()
        setTodo("")
    }

    const addTodo = () => {
        setTodos(prevTodos => [...prevTodos, 
            {
                id: prevTodos.length + 1,
                text: todo,
                completed: false
            }
        ])
    }

    const deleteTodo = (id) => {
        const filteredTodos = todos.filter(item => item.id !== id)

        setTodos(filteredTodos)
    }

    const toggleTodo = id => {
        setTodos(prevTodos => {
            let updatedTodos = prevTodos.map(item => {
                if(item.id === id) item.completed = !item.completed

                return item
            })
            return updatedTodos
        })
    }
    
    return (
        <div >
            <header>
                <h1>Todo List</h1>
            </header>
            <div className="todo-list">
                {
                    todos.map(e => 
                        <TodoItem key={e.id} item={e} toggleTodo={toggleTodo}
                        deleteTodo={deleteTodo}
                    />)
                }
                <br />
                <form onSubmit={onSubmit}>
                    <input 
                        onChange={handleChange}
                        value={todo}
                    />
                    <button type="submit">Add</button>
                </form>
            </div>
        </div>
    )
}

export default App