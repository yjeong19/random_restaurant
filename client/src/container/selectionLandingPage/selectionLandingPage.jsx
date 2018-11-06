import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';
import { checkPost, createPost, createComment, getComments } from '../../helpers/routes';
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

  componentDidMount(){
    this.renderSelectedInfo();
    this.getComments();
    // console.log(this.props.comments);
  }


  componentDidUpdate(){
    // this.renderComments();
  //   console.log(this.props.state.selection);
  //   let info = this.props.state.selection ? this.props.state.selection : '';
  //   if(info !== '') {
  //   checkPost(info)
  //   .then(res => {
  //     console.log(res);
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   })
  // }else{
  //   return null;
  // }
  }

  getComments(){
    //gets comments from db and then puts it into commentsReducer
    // console.log(this.props.state.selection);
    let info = this.props.state.selection ? this.props.state.selection : '';
    if(info !== '') {
      getComments(info)
      .then(res => {
        console.log(res.data[0].comments)
        this.props.addComments(res.data[0].comments);
      })
      .catch(err => {
        console.log(err);
      })
    }else {
      return null;
    }
  };

  renderComments(){
    return(
      <div>
        {this.props.comments.map((comment, i)=>{
          return(
            <div className = 'commentCard'>
              <h1>{comment.user}</h1>
              <p>{comment.comment}</p>
              <p>-------------------------------</p>
            </div>
          )
        })}
      </div>
    )
  }

  renderSelectedInfo(){
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
    .then(res => {
      // console.log(res, 'line 117 ============================');
      this.props.addNewComment(res.data);
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
          {this.renderComments()}
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  addUserSelection: (selection) => dispatch(actions.addUserSelection(selection)),
  addComments: (comments) => dispatch(actions.addComments(comments)),
  addNewComment: (comment) => dispatch(actions.addNewComment(comment)),
});

const mapStateToProps = ((state, ownProps) => {
  return {
    state: state.searchResultsReducer,
    comments: state.commentsReducer,
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(selectionLandingPage);
