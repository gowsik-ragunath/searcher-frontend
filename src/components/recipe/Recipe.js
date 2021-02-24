import React, { Component } from 'react';
import Food from '../food/Food';

class Recipe extends Component{
    state = {
        foods: []
    }

    componentDidMount() {
        const url = "http://localhost:3001/api/v1/foods";
        fetch(url)
          .then(res => res.json())
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