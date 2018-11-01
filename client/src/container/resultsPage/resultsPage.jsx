import React, { Component } from 'react';
import Searchbar from '../../components/searchbar';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';

//importing selectionlandingpage for now, route to based on click later;
import SelectionLandingPage from '../selectionLandingPage';

//temporarily importing searchbar
//is it better to make searchbar its own page


class resultsPage extends Component {
  constructor(props){
    super(props);

    //bind events
    this.handleUserSelection = this.handleUserSelection.bind(this);
  }

  componentDidMount(){
    console.log(this.props);
  }

  componentDidUpdate(){
  }

  //handle user selection then route to landing page
  handleUserSelection(e){
    //can get id, but not keys?
    //right now, click on h1 will link to landing page
    this.props.addUserSelection(e.target.id);
  }

  renderCards(){
    const search = this.props.results.search;
    const random = this.props.results.random;
    // console.log(this.props.results)
    console.log(random);
    if(this.props.results.state === 'search' && search !== null){
      return (
        search.map((info, i)=> {
          return(
            <div className='card' key = {info.id} onClick = {this.handleUserSelection}>
              <h1 id = {info.id}>{info.name}</h1>
              <img width = '200px' height = '200px' src = {info.image_url} />
            </div>
          )
        })
      )
    }else if(this.props.results.state === 'random' && random !==null){
      return (
          //do i make card in components?
          <div className='card' key = {random.id}>
            <h1>{random.name}</h1>
            <img width = '200px' height = '200px' src = {random.image_url} />
          </div>
      )
    }else{
      return;
    }
  }


  render(){
    return(
      <div>
        <Searchbar
          addSearchResults = { this.props.addSearchResults }
          addRandomRestaurant = { this.props.addRandomRestaurant }
        />
        <SelectionLandingPage />
        <div>{this.renderCards()}</div>
      </div>
    )
  }
}


//redux setup below
const mapDispatchToProps = (dispatch) => ({
  addSearchResults: (results) => dispatch(actions.addSearchResults(results)),
  addRandomRestaurant: (results) => dispatch(actions.addRandomRestaurant(results)),
  addUserSelection: (selection) => dispatch(actions.addUserSelection(selection)),
});

const mapStateToProps = ((state, ownProps) => {
  // console.log(state);
  return {
    results: state.searchResultsReducer,
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(resultsPage);
