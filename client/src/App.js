import React, { Component } from 'react';
// import Searchbar from './components/searchbar';
import ResultsPage from './container/resultsPage';
class App extends Component {
  render() {
    return (
        <div className="App">
          <h1>hello</h1>
            <ResultsPage />
          {/* <Searchbar /> */}
        </div>
    );
  }
}

export default App;
