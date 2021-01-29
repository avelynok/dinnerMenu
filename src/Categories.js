import React from 'react'

function Categories({options, filterMenu}) {
    return (
        <div className='btn-container'>
            {options.map((option, index) => {
                return (
                    <button className='filter-btn' key={index} onClick={() => filterMenu(option)}>
                        {option}
                    </button>
                )
            })}
        </div>
    )
}

export default Categories
