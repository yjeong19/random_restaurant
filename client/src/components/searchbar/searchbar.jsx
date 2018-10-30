import React, { Component } from 'react';
const axios = require('axios');

class searchbar extends Component {
  constructor(props){
    super(props);

    //var to store searchbar info
    this.searchbarInput = {
      //make term section? or switch with categories
      term: 'restaurant',
      location: '',
      categories: '',
    };

    //bind events
    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  //this makes keystroke in search bar to searchbarInput object
  handleSearchInput(e){
    switch(e.target.id){
      case 'categories':
        //this may be changed to an array of options later.
        this.searchbarInput.categories = e.target.value;
        break;
      case 'location':
        this.searchbarInput.location = e.target.value;
        break;
      default:
        return;
    }
    // this.searchbarInput = e.target.value;
    // console.log(this.searchbarInput);
  }

  //submit function --
  //makes api call to yelpAPI
  //api returns either random option or a list of options
  //make one for random and one button for regular search

  //initally making one submit, will do case? or other way to decide which button was chosen;
  handleSubmit(e){
    // console.log(this.searchbarInput);
    const searchType = e.target.id === 'submit' ? 'search' : 'random';
    console.log(searchType);
    axios.get(`http://localhost:8081/yelp/${searchType}`, {
      params: {
        term: this.searchbarInput.term,
        location: this.searchbarInput.location,
        categories: this.searchbarInput.categories,
        price: 1
      }
    })
    .then((response) => {
      console.log(response);
    })
    .catch(err => {
      console.log(err);
    })
  };

  render(){
    return(
      <div>
        <input placeholder = 'categories' id = 'categories' onChange = {this.handleSearchInput}></input>
        <input placeholder = 'location' id = 'location' onChange = {this.handleSearchInput}></input>
        <button id = 'submit' onClick = {this.handleSubmit}>submit</button>
        <button id ='random' onClick = {this.handleSubmit}>random</button>
      </div>
    )
  }
}

export default searchbar;
