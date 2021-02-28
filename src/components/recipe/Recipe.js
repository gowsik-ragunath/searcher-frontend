import React, { Component } from 'react';
import Food from '../food/Food';

class Recipe extends Component{
    constructor(props) {
        super(props);
        this.state = {
            foods: []
        }
    }

    componentDidMount() {
        const url = "http://localhost:3001/api/v1/foods";
        fetch(url)
          .then(res => res.json())
          .then((data) => {
              this.setState({ foods: data.data });
        })
    }
    
    render() {
        return (
            <div className="container">
                <div className="search-container">
                    {this.state.foods.map((food) => 
                        <Food food={food} key={food.id}/>
                    )}
                </div>
            </div>   
        )
    }
}

export default Recipe;