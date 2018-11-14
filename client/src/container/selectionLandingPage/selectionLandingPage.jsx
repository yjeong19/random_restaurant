import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';
import {
  checkPost,
  createPost,
  createComment,
  getComments,
  postLikes,
} from '../../helpers/routes';
import './style.css'

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
    this.updateLikes = this.updateLikes.bind(this);
    this.handleCommentInput = this.handleCommentInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    this.renderSelectedInfo();
    this.getCommentsAndLikes();
    console.log('selection landing page mounted');
  }


  componentDidUpdate(){
    console.log(this.props.likes);
    // this.getCommentsAndLikes();
  }

  updateLikes(e){
    console.log(e.target.id);
    console.log(this.props.state)
    postLikes(this.props.state.selection.id, e.target.id)
    .then(res => {
      console.log(res);
      this.props.addLikes(res.data);
    })
    .catch(err => {
      console.log(err);
    })
  }

  getCommentsAndLikes(){
    //also gets likes ---
    //gets comments from db and then puts it into commentsReducer
    // console.log(this.props.state.selection);
    let info = this.props.state.selection ? this.props.state.selection : '';
    if(info !== '') {
      getComments(info)
      .then(res => {
        console.log(res.data[0], 'line 61 ========')
        res.data[0] !== undefined ? this.props.addComments(res.data[0].comments) : this.props.addComments([])
        // console.log(typeof(res.data[0].likes));
        res.data[0] !== undefined ? this.props.addLikes(res.data[0].likes) : this.props.addLikes({});
      })
      .catch(err => {
        console.log(err);
      })
    }else {
      return null;
    }
  };

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
  };

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
  };

  renderComments(){
    return(
      <div>
        {this.props.comments.map((comment, i)=>{
          return(
            <div className = 'commentCard row'>
              <h1 className='comment_user col-lg-12'>{comment.user}</h1>
              <img className='user_img col-lg-2' src='#' width='20px' height = '20px' />
              <div className='comment_info col-lg-6'>
                <p className='user_comment'>{comment.comment}</p>
                {/* temp using current date */}
                <p className='comment_date'>{Date.now().toString()}</p>
              </div>
            </div>
          )
        })}
      </div>
    )
  };


  //function below creates newly selected restaurants, if it had not been created in DB alraedy.
  //function is run at componentdidmount to check existance.
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
    };
  };

  renderCommentForm(){
    return(
      <div>
        <div>
          <button className = 'like_button' onClick = {this.updateLikes}>Like</button>
          <button className = 'btn-danger dislike_button' onClick = {this.updateLikes}>Dislike</button>
        </div>
        <div>
          {/* temporarily name, add auth later */}
          <input className = 'user' placeholder = 'user' onChange = {this.handleCommentInput}/>
          <input className = 'comment' placeholder = 'comment' onChange = {this.handleCommentInput}/>
          <button onClick = {this.handleSubmit}>submit</button>
        </div>
      </div>
    );
  };


  renderInfoSection(){
    let info = this.props.state.selection ? this.props.state.selection : '';
    return(
      <div className='info_section_wrapper row'>
        <h1 className='restaurant_name col-lg-12'>{info !== '' ? info.name : ''}</h1>
        <img src = {info !== '' ? info.image_url : ''} className='rest_img col-md-4 col-xs-6' width = '200px' height = '200px'/>
        <div className='landing_info_section col-md-4 col-sm-6'>
          {/* POSSIBLY ADD MAPS FOR REST OF ROW */}
          <p className='rest_address'>{info !== '' ?
            `${info.location.address1} \n ${info.location.city}, ${info.location.state} ${info.location.zip_code}` : ''}</p>
          <p className='yelp_price'>{`Yelp Price: ${info.price === undefined ? 'No Rating' : info.price}`}</p>
          <p>{info !== '' ? info.rating : ''}</p>
          <p className = 'likes'>{`Liked: ${this.props.likes.likes === undefined ? 'No Rating': this.props.likes.likes}`}</p>
          <p className = 'dislikes'>{`Disliked: ${this.props.likes.dislikes === undefined ? 'No Rating': this.props.likes.dislikes}`}</p>
          <p className = 'percentage'>{`Percent Liked ${this.props.likes.likes !== undefined && this.props.likes.dislikes/this.props.likes.likes > 0 ? `${(1 - (this.props.likes.dislikes/this.props.likes.likes)).toString().slice(2, 4)}%` : '0'}`}</p>
        </div>
      </div>
    );
  };

  render(){
    // let info = this.props.state.selection ? this.props.state.selection : '';
    return(
      <div className='info_container'>
        {this.renderInfoSection()}
        <div>
          {this.renderCommentForm()}
          {this.renderComments()}
        </div>
      </div>
    )
  }
};

const mapDispatchToProps = (dispatch) => ({
  addUserSelection: (selection) => dispatch(actions.addUserSelection(selection)),
  addComments: (comments) => dispatch(actions.addComments(comments)),
  addNewComment: (comment) => dispatch(actions.addNewComment(comment)),
  addLikes: (likes) => dispatch(actions.addLikes(likes)),
});

const mapStateToProps = ((state, ownProps) => {
  return {
    state: state.searchResultsReducer,
    comments: state.commentsReducer,
    likes: state.likesReducer,
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(selectionLandingPage);
