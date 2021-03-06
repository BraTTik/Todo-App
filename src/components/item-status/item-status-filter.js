import React, { Component} from 'react';

import './item-status-filter.css';

export default class ItemStatusFilter extends Component{

    render() {
        const { changeStatusFilter, status } = this.props
        return (
            <div className="btn-group">
                <button type="button"
                        className={`btn ${status === 0 ? 'btn-info' : 'btn-outline-secondary' }`}
                        onClick={() => changeStatusFilter(0)}
                >All</button>
                <button type="button"
                        className={`btn ${status === 1 ? 'btn-info' : 'btn-outline-secondary' }`}
                        onClick={() => changeStatusFilter(1)}
                >Active</button>
                <button type="button"
                        className={`btn ${status === 2 ? 'btn-info' : 'btn-outline-secondary' }`}
                        onClick={() => changeStatusFilter(2)}
                >Done</button>
            </div>
        );

    }
}
