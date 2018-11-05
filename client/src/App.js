import React, { Component } from 'react';
// import Searchbar from './components/searchbar';
import ResultsPage from './container/resultsPage';
import SelectionPage from './container/selectionLandingPage';
import { Route, BrowserRouter } from 'react-router-dom';



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <h1>hello</h1>
            <Route exact path = '/' component = {ResultsPage} />
            <Route path = '/restaurant_landing' component = {SelectionPage} />
          {/* <Searchbar /> */}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
