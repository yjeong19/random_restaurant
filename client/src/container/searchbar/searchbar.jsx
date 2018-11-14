import React, { Component } from 'react';
import fetchAPI from '../../helpers/yelp_api';
import * as actions from '../../redux/actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import './style.css';

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

  renderPriceChoice(){
    return (
      <div class="btn-group btn-group-toggle" data-toggle="buttons">
        <label class="btn btn-secondary active">
          <input type="radio" name="options" id="$" autocomplete="off" checked />$
        </label>
        <label class="btn btn-secondary">
          <input type="radio" name="options" id="$$" autocomplete="off" />$$
        </label>
        <label class="btn btn-secondary">
          <input type="radio" name="options" id="$$$" autocomplete="off" />$$$
        </label>
        <label class="btn btn-secondary">
          <input type="radio" name="options" id="$$$$" autocomplete="off" />$$$$
        </label>
      </div>
    )
  }

  render(){
    return(
      <div className='jumbotron search_main'>
        <h1 className='pick_something'>Pick Something</h1>
        <nav className="navbar search_container" >
          <form class="search_form form-inline">
            <input class="form-control mr-sm-2" placeholder = 'categories' id = 'categories' onChange = {this.handleSearchInput}/>
            <input class="form-control mr-sm-2" placeholder = 'location' id = 'location' onChange = {this.handleSearchInput}/>
            <div>{this.renderPriceChoice()}</div>

          <Link to = {'/results'}>
            <button class="btn btn-outline-success my-2 my-sm-0" id = 'submit' onClick = {this.handleSubmit}>Search</button>
            <button class="btn btn-outline-success my-2 my-sm-0" id ='random' onClick = {this.handleSubmit}>Randomize</button>
          </Link>
          {/* <div>{this.renderPriceChoice()}</div> */}
          </form>
        </nav>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  addSearchResults: (results) => dispatch(actions.addSearchResults(results)),
  addRandomRestaurant: (results) => dispatch(actions.addRandomRestaurant(results)),
});

const mapStateToProps = ((state, ownProps) => {
  // console.log(state);
  return {
    state,
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(searchbar);
