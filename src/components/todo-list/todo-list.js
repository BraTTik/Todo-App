import React from 'react'
import TodoItem from "../todo-item"
import './todo-list.css'

const TodoList = ({ todos, onDeleted, onToggleDone, onToggleImportant }) => {
    const elements = todos.map( ({id, ...itemProps }) => {
        return (
            <li
                key={`item-${id}`}
                className={'list-group-item'}
            >
                <TodoItem { ...itemProps }
                    onDeleted={() => onDeleted(id)}
                    onToggleImportant={() => onToggleImportant(id)}
                    onToggleDone={() => onToggleDone(id)}
                />
            </li>
        )
    })
    return (
        <ul
            className={'list-group todo-list'}
        >
            { elements }
        </ul>
    )
}

export default TodoList
