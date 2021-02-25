import React, { useEffect, useState } from 'react';

function FoodShow(props) {
    const {id} = props.match.params;
    const [food, setFood] = useState({
			id: "",
			name: "",
			created_at: "",
			updated_at: "",
			tsv: "",
			rich_text_description: {
				id: "",
				name: "",
				body: "",
				record_type: "",
				record_id: "",
				created_at: "",
				updated_at: ""
			}
		});
    const url = `http://localhost:3001/api/v1/foods/${id}`;

    
	useEffect(() => {
		const fetchFood = async() => {
			const res = await fetch(url);
			const data = await res.json();
			setFood(data);
		}
		fetchFood();
	}, [])


    return (
			<div>
				<div className="heading">{food.name}</div>
				<div className="content">{food.rich_text_description.body}</div>
			</div>
    )
}

export default FoodShow;