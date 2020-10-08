import React, { Component } from 'react';
import Quote from './components/quote';
import './App.css';

import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      isLoaded: false,
      quote: []
    };
  }

  componentDidMount() {
    fetch('https://quotes.rest/qod')
      .then(response => response.json())
      .then((result) => {
        this.setState({
          isLoaded: true,
          quote: result.contents.quotes[0]
        });
      console.log(result);
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      })
  }

  render() {
    const {error, isLoaded, quote} = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="App">
          <header className="App-header">
            <h1>{quote.quote}</h1>
            <h4>{quote.author}</h4>
          </header>
          
        </div>
        
      );
    }
  }
}

export default App;
