import { render } from '@testing-library/react';
import React, { Component } from 'react';
import axios from 'axios';
import Food from '../food/Food';

class Recipe extends Component{
    state = {
        foods: []
    }

    componentDidMount() {
        const url = "http://localhost:3001/api/v1/foods"
        axios.get(url)
            .then(res => res.data)
            .then((data) => {
                this.setState({ foods: data });
            })
    }
    

    render() {
        return (
            <div className="search-container">
                {this.state.foods.map((food) => 
                    <Food food={food} key={food.id}/>
                )}
            </div>
                
        )
    }
}

export default Recipe;