import React, { Component } from 'react';
import Searchbar from '../../components/searchbar';
import { connect } from 'react-redux';
//temp importing all actions -- specifiy actions later
import * as actions from '../../redux/actions';

//temporarily importing searchbar
//is it better to make searchbar its own page?
//incorporate redux if need be.

class resultsPage extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    // console.log(this.props);
  }


  render(){
    return(
      <div>
        <Searchbar
          addSearchResults = { this.props.addSearchResults }
        />
      </div>
    )
  }
}


//redux setup below
const mapDispatchToProps = (dispatch) => ({
  addSearchResults: (results) => dispatch(actions.addSearchResults(results)),

});

const mapStateToProps = ((state, ownProps) => {
  console.log(state);
  return {
    state
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(resultsPage);
