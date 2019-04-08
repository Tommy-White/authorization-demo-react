import React, { Component } from 'react';
import './App.css';
import Routes from './page/index'

class App extends Component {

  state = {
    owned: 'guest',
  }

  handleChange = (e) => {
    this.setState({
      owned: e.target.value
    })
  }

  render() {
    return (
      <div className="App">
        Current owned: <input type="text" onChange={this.handleChange} value={this.state.owned}/>
        <Routes owned={this.state.owned}/>
      </div>
    );
  }
}

export default App;
