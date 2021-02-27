import React, { useEffect, useState } from 'react';

function FoodShow(props) {
    const {id} = props.match.params;
    const [food, setFood] = useState({
		attributes: {
			name: '',
			description: ''
		}
	});
    const url = `http://localhost:3001/api/v1/foods/${id}`;

    
	useEffect(() => {
		const fetchFood = async() => {
			const res = await fetch(url);
			const data = await res.json();
			setFood(data.data);
		}
		fetchFood();
	}, [])


    return (
			<div>
				<div className="heading">{food.attributes.name}</div>
				<div className="content">{food.attributes.description}</div>
			</div>
    )
}

export default FoodShow;