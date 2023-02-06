import React, { Component } from 'react';

const Joke = ({ joke: { setup, punchline } }) => (
  <p style={{ margin: 20 }}>{setup} <em>{punchline}</em></p>
);

class Jokes extends Component {
  state = { initialJoke: {}, extraJokes: [] };

  displayJokes = () => {
    fetch('https://official-joke-api.appspot.com/random_ten')
	    .then(response => response.json())
      .then(json => this.setState({ extraJokes: json }));
  };

  componentDidMount () {
    fetch('https://official-joke-api.appspot.com/random_joke')
      .then(response => response.json())
      .then(json => this.setState({ initialJoke: json }));
  }

  render () {
    return (
      <div>
        <h2>Highlighted joke</h2>
        <Joke joke={this.state.initialJoke} />

        <h3>Want more jokes?</h3>
        <button onClick={this.displayJokes}>Click me!</button>
        {this.state.extraJokes.map((joke, index) => <Joke key={index} joke={joke} />)}
      </div>
    );
  }
}

export default Jokes;
