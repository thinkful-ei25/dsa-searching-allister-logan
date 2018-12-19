import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { linearSearch } from './search'

console.log(linearSearch);

class App extends Component {

  constructor(props) {
      super(props)  
      this.state = {
      dataset: [89, 30, 25, 32, 72, 70, 51, 42],
      searchTerm: null,
      result: null
    }
    
  }


  onClick(e) {
    e.preventDefault();
    console.log(this.state.searchTerm)
    console.log(this.state.dataset)
    this.setState( 
    {
     result: linearSearch(Number(this.state.searchTerm), this.state.dataset)
    })
  }

  render() {
    return (
      <div>
        <form >
          <label htmlFor="searchTerm">Enter search number:</label>
          <input onChange=
            {e => this.setState({
                searchTerm: e.target.value
              })} type="number" id="searchTerm"></input>
          <button onClick={(e => this.onClick(e))}>Submit</button>
        </form>
        <div>
          {this.state.result}
        </div>
      </div>
    );
  }
}

export default App;
