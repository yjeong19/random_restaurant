import React, { Component } from 'react';

class choiceCards extends Component {
  constructor(props){
    super(props);

    // bind events
    this.handleUserSelection = this.handleUserSelection.bind(this);
  }

  componentDidMount(){
    console.log(this.props);
  }

  //handle user selection then route to landing page
  handleUserSelection(e){
    //right now, click on h1 will link to landing page
    this.props.addUserSelection(this.props.data);
  }

  render(){
    return(
      <div id = {this.props.data.id} className='card' onClick={this.handleUserSelection}>
        <h1>{this.props.data.name}</h1>
        <img width = '200px' height = '200px' src = {this.props.data.image_url}/>
      </div>
    )
  }
}

export default choiceCards;
