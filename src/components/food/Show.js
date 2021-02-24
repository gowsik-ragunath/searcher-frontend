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

    useEffect(() => (
        fetch(url)
          .then(res => 
            {
              return res.json();
            })
          .then((data) => {
            setFood({...food, id: data.id, name: data.name, body: data.rich_text_description.body });
						console.log(data.id)
						console.log(food)
        })
    ), [food]); // TODO: need to fix infinite fetch calls here


    return (
			<div>
        <div className="heading">{food.name}</div>
        <div className="content">{food.body}</div>
			</div>
    )
}

export default FoodShow;