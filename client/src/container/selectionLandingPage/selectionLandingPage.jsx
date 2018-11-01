import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';


class selectionLandingPage extends Component {
  constructor(props){
    super(props);

  }

  componentDidMount(){
    console.log(this.props);
  }


  render(){
    return(
      <div>SELECTION LANDING PAGE</div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  addUserSelection: (selection) => dispatch(actions.addUserSelection(selection)),
});

const mapStateToProps = ((state, ownProps) => {
  return {
    state
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(selectionLandingPage);
