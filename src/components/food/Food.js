import React from 'react';
import { Link } from 'react-router-dom'

function Food(props) {
  return (
    <Link to={`/foods/${props.food.id}`} className="link">
      <div className="card">
        <div className="title">{props.food.attributes.name}</div>
        <div className="description">{props.food.attributes.description}</div>
      </div>
    </Link>
  )
}

export default Food;