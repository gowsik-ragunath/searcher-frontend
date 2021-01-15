import { render } from '@testing-library/react';
import React, { Component } from 'react';
import axios from 'axios';
import Food from './Food';

class Recipe extends Component{
    state = {
        foods: []
    }

    componentDidMount() {
        const url = ""
        axios.get("localhost:3001/")
            .then(res => res.data)
            .then((data) => {
                this.setState({ foods: data });
                console.log(this.state.foods)
            })
    }
    

    render() {
        return (
            <div>
                {this.state.foods.map((food) => 
                    <Food food={food} key={food.id}/>
                )}
            </div>
                
        )
    }
}

export default Recipe;