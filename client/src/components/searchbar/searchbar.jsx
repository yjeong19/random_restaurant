import React, { Component } from 'react';
import fetchAPI from '../../helpers/yelp_api';


class searchbar extends Component {
  constructor(props){
    super(props);

    //var to store searchbar info
    this.searchbarInput = {
      //make term section? or switch with categories
      term: '',
      location: '',
      categories: 'restaurants',
    };

    //bind events
    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    console.log(this.props);
  }

  //this makes keystroke in search bar to searchbarInput object
  handleSearchInput(e){
    switch(e.target.id){
      case 'categories':
        //this may be changed to an array of options later.
        this.searchbarInput.term = e.target.value;
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

  //makes api call to yelpAPI in /controller/yelp_api.jsx
  //api returns either random option or a list of options
  handleSubmit(e){
    //searchType selects weather it is search or random
    const searchType = e.target.id === 'submit' ? 'search' : 'random';
    fetchAPI(searchType, this.searchbarInput)
    .then((response) => {
      searchType === 'search' ? this.props.addSearchResults(response.data) : searchType === 'random' ? this.props.addRandomRestaurant(response.data) : console.log('err');
      // this.props.addSearchResults(response.data);
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
