import React from 'react';
import DisplayQuote from './components/DisplayQuote';
import axios from 'axios';
import './App.css';

const sampleQuote = {
  quote:	"I don't want to sound like a killjoy, but becuase this is not to my taste I don't think anyone else should be allowed to enjoy it.",
  character:	"Marge Simpson",
  image:	"https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FMargeSimpson.png?1497567512205",
}


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      character: sampleQuote,
    };

    this.newQuote = this.newQuote.bind(this);

  }

  newQuote() {
    axios.get('https://simpsons-quotes-api.herokuapp.com/quotes')
      .then(response => response.data)
      .then(data => {
        this.setState({
          character: data[0],
        });
      });
  }

  render() {
    return (
      <div className="App">
        <DisplayQuote character={this.state.character}/>
        <button type="button" onClick={this.newQuote}>Get a new quote</button>
      </div>
    );
  }
}

export default App;
