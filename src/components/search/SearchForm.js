import React, { Component } from 'react';

class SearchForm extends Component{
  constructor(props) {
    super(props);
    this.state = { q: '' };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = (event) => {
    const url = "http://localhost:3001/api/v1/foods?";
    const params = new URLSearchParams(this.state)
    fetch(url + params)
    .then((res) => {
      return res.json();
    }).then((data) => {
       // Got search results here Yaaaa!!
       // Need to analyze futher to replace the index page result
       // With new search results
      console.log(data);
    })
    event.preventDefault();
  }

  render() {
    return (
      <form className="search" onSubmit={ this.handleSubmit }>
          <input type="text" className="search-input" name="q" onChange={this.handleChange}></input>
          <input type="submit" className="button" value="Search" />
      </form>
    )
  }
}

export default SearchForm;