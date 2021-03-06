import React, { Component } from 'react'
import './add-panel.css'

export default class AddPanel extends Component{
    state = {
        label: ''
    }
    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        })
    }
    onSubmit = (e) => {
        e.preventDefault()
        this.props.onAddClick(this.state.label)
        this.setState({label: ''})
    }
    render() {
        const { label } = this.state
        return (
            <form
                className={'add-panel d-flex'}
                onSubmit={this.onSubmit}
            >
                <input
                    type={'text'}
                    className={'form-control'}
                    onChange={this.onLabelChange}
                    placeholder={'What needs to be done'}
                    value={label}
                />
                <button
                    className={'btn btn-outline-secondary'}
                >
                   Add item
                </button>
            </form>
        )

    }
}

