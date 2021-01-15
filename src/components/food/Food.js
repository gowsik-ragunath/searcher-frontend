import React from 'react';

function food(props) {
    return (
        <div className="card">
            <div className="title">{props.food.name}</div>
            <div className="description">{props.food.rich_text_description.body}</div>
        </div>
    )
}

export default food;