import React, { Component } from 'react';
import Quote from './components/quote';
import './App.css';

import axios from 'axios';

class App extends Component {
  state = {
    quote: []
  }

  componentDidMount() {
    axios.get('https://officeapi.dev/api/quotes/random')
      .then(response => {
        const quote = response.data;
        this.setState({ quote });
      })
  }

  // constructor(props) {
  //   super(props);
  //   this.state = {isToggleOn: false};
  //   this.handleClick = this.handleClick.bind(this);
  // }

  // handleClick() {
  //   this.setState(prevState => ({
  //     isToggleOn: !prevState.isToggleOn
  //   }));
  // }

  render() {
    return (
      <div className="App">
      <header className="App-header">
        <div>
          <h1>Hello, World!</h1>
          {/* <button onClick={this.handleClick}>
            {this.state.isToggleOn ? 'Boop' : 'Click Me'}
          </button> */}
        </div>
        <Quote quote={this.state.quote} />
      </header>
    </div>
    )
  }
}

export default App;
