import React, { Component } from 'react';

class choiceCards extends Component {
  constructor(props){
    super(props);

  }

  componentDidMount(){
    console.log(this.props);
  }

  render(){
    return(
      <div className='card'>
        <h1>{this.props.data.name}</h1>
        <img width = '200px' height = '200px' src = {this.props.data.image_url}/>
      </div>
    )
  }
}

export default choiceCards;
