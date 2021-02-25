import React from 'react';
import { Link } from 'react-router-dom'

function Food(props) {
    return (
    <Link to={`/foods/${props.food.id}`} className="link">
      <div className="card">
        <div className="title">{props.food.name}</div>
        <div className="description">{props.food.rich_text_description.body}</div>
      </div>
    </Link>
    )
}

export default Food;