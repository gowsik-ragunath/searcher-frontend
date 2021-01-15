import React from 'react';

function food(props) {
    return (
        <div>
            <div className="title">{props.food.name}</div>
            <div className="description">{props.food.description}</div>
        </div>
    )
}

export default food;