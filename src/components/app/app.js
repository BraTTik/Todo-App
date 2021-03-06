import React, { Component } from 'react';
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import TodoList from "../todo-list";
import AddPanel from "../add-panel";
import ItemStatusFilter from "../item-status";
import './app.css'


export default class App extends Component{

    maxId = 100

    state = {
        todoData: [
            this.createTodoItem('Drink Coffee'),
            this.createTodoItem('Make Awesome App'),
            this.createTodoItem('Have a lunch')
            ],
        keyword: '',
        statusFilter: 0,
    }

    changeStatusFilter = (status) => {
        this.setState({statusFilter: status})
    }

    createTodoItem(label){
        return {
            label,
            important: false,
            done: false,
            id: this.maxId++
        }
    }

    keywordSearch = (keyword) => {
        this.setState({keyword})
    }

    deleteItem = (id) => {
        this.setState(({ todoData }) => {
            const idx = todoData.findIndex( item => item.id === id)

            return {
                todoData: [
                    ...todoData.slice(0, idx),
                    ...todoData.slice(idx + 1)
                ]
            }
        })
    }

    addItem = (text) => {
        this.setState(({ todoData }) => {
            return {
                todoData: [
                    ...todoData,
                    this.createTodoItem(text)
                ]
            }
        })
    }

    toggleProperty(array, id, propName){
        const idx = array.findIndex( item => item.id === id)
        const newItem = { ...array[idx], [propName]: !array[idx][propName]}

        return  [
            ...array.slice(0, idx),
            newItem,
            ...array.slice(idx + 1)
        ]
    }

    onToggleImportant = (id) => {
        this.setState(({ todoData}) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'important')
            }
        })
    }

    onToggleDone = (id) => {
        this.setState(({ todoData }) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'done')
            }
        })
    }

    onSearch = (text) => {
        this.setState({
            keyword: text
        })
    }

    filterTodoData(todos, status, keyword){
        let result;
        result = status ? todos.filter(todo => status === 1 ? !todo.done : todo.done) : todos
        result = keyword ? result.filter(todo => todo.label.includes(keyword)) : result
        return result
    }

    render() {
        const { todoData, statusFilter, keyword } = this.state
        const doneCount = todoData.filter( item => item.done === true).length
        const todoCount = todoData.length - doneCount
        return (
            <div className={'todo-app'}>
                <AppHeader toDo={todoCount} done={doneCount}/>
                <div className={'top-panel d-flex'}>
                    <SearchPanel onKeywordSearch={this.keywordSearch}/>
                    <ItemStatusFilter status={statusFilter} changeStatusFilter={this.changeStatusFilter}/>
                </div>
                <TodoList
                    todos={this.filterTodoData(todoData, statusFilter, keyword)}
                    onDeleted={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleDone={this.onToggleDone}
                />
                <AddPanel onAddClick={this.addItem}/>
            </div>
        )

    }
}

