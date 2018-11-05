import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';
import { checkPost, createPost, createComment } from '../../helpers/routes';
//route from resultspage
class selectionLandingPage extends Component {
  constructor(props){
    super(props);

    this.comment = {
      id: null,
      comment: null,
      user: null
    };

    //bind events
    this.handleCommentInput = this.handleCommentInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  componentDidUpdate(){
    console.log(this.props.state.selection);
    let info = this.props.state.selection ? this.props.state.selection : '';
    if(info !== '') {
    checkPost(info)
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    })
  }else{
    return null;
  }
  }

  handleCommentInput(e){
    // console.log(this.);
    switch(e.target.id){
      case 'user':
        this.comment.user = e.target.value;
        break;

      case 'comment':
        this.comment.comment = e.target.value;
        break;

      default:
        return;
    }
    // this.comment.comment = e.target.value;
  }

  handleSubmit(event){
    event.preventDefault();
    this.comment.id = this.props.state.selection.id;
    createComment(this.comment)
    .then(data => {
      console.log(data);
    })
    .catch(err => {
      console.log(err);
    })
  }

  renderCommentSection(){
    return(
      <div>
        <button>Like</button>
        <button>Dislike</button>
        {/* temporarily name, add auth later */}
        <input id = 'user' placeholder = 'user' onChange = {this.handleCommentInput}/>
        <input id = 'comment' placeholder = 'comment' onChange = {this.handleCommentInput}/>
        <button onClick = {this.handleSubmit}>submit</button>
      </div>
    )
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
        <div>
          {this.renderCommentSection()}
        </div>
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
