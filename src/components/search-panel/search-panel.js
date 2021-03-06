import React from 'react'

const SearchPanel = ({ onKeywordSearch }) => {
    return (
            <input
                className={'search-input'}
                placeholder={'search'}
                onChange={(e) => onKeywordSearch(e.target.value)}
            />
    )
}

export default SearchPanel