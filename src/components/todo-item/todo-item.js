import React, { Component } from 'react'
import './todo-item.css'

export default class TodoItem extends Component{

    render () {
        const { label, onDeleted,
            onToggleDone,
            onToggleImportant,
            done, important } = this.props


        const classNames = `todo-list-item ${done ? 'done' : ''} ${important ? 'important' : ''}`

        return (
            <span className={classNames}>
              <span
                  className="todo-list-item-label"
                  onClick={onToggleDone}
              >
                {label}
              </span>

              <button type="button"
                      className="btn btn-outline-success btn-sm float-right"
                      onClick={onToggleImportant}
              >
                <i className="fa fa-exclamation" />
              </button>

              <button type="button"
                      className="btn btn-outline-danger btn-sm float-right"
                      onClick={onDeleted}
              >
                <i className="fa fa-trash-o" />
              </button>
            </span>
        );
    }
}
