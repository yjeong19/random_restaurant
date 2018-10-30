import React, { Component } from 'react';

class searchbar extends Component {
  constructor(props){
    super(props);

    //var to store searchbar info
    this.searchbarInput = null;

    //bind events
    this.handleSearchInput = this.handleSearchInput.bind(this);
  }

  //this makes keystroke in search bar to searchbarInput var
  handleSearchInput(e){
    this.searchbarInput = e.target.value;
    console.log(this.searchbarInput);
  }



  render(){
    return(
      <div>
        <input onChange = {this.handleSearchInput}></input>
        <button>submit</button>
      </div>
    )
  }
}

export default searchbar;
