import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';

//route from resultspage
class selectionLandingPage extends Component {
  constructor(props){
    super(props);

  }

  componentDidMount(){
    // console.log(this.props.state.selection);
  }


  renderInfoSection(){
    let info = this.props.state.selection ? this.props.state.selection : '';
    return(
      <div>
        <h1>SELECTION LANDING PAGE</h1>
        <p>{info !== '' ? info.name : ''}</p>
        <img src = {info !== '' ? info.image_url : ''} width = '200px' height = '200px'/>
        <p>{info !== '' ?
          `${info.location.address1} \n ${info.location.city}, ${info.location.state} ${info.location.zip_code}` : ''}</p>
        <p>{info !== '' ? info.price : ''}</p>
        <p>{info !== '' ? info.rating : ''}</p>
      </div>
    )
  }

  render(){
    // let info = this.props.state.selection ? this.props.state.selection : '';
    return(
      <div>
        {this.renderInfoSection()}
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  addUserSelection: (selection) => dispatch(actions.addUserSelection(selection)),
});

const mapStateToProps = ((state, ownProps) => {
  return {
    state: state.searchResultsReducer,
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(selectionLandingPage);
