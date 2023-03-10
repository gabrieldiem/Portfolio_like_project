import React, { Component } from 'react';

const TITLES = [
  'a software engineer',
  'a science lover',
  'an enthusiastic learner',
  'an adventure seaker'
];

class Title extends Component {
  state = { titleIndex: 0, fadeIn: true };

  componentDidMount () {
    this.timeout = setTimeout(() => { this.setState({ fadeIn: false }); }, 2000);
    this.animateTitles();
  }

  componentWillUnmount () {
    clearInterval(this.titleInterval);
    clearInterval(this.timeout);
  }

  animateTitles = () => {
    this.titleInterval = setInterval(() => {
      const newIndex = (this.state.titleIndex + 1) % TITLES.length;
      this.setState({ titleIndex: newIndex, fadeIn: true });
      this.timeout = setTimeout(() => { this.setState({ fadeIn: false }); }, 2000);
    }, 4000);
  };

  render () {
    const { titleIndex, fadeIn } = this.state;
    const title = TITLES[titleIndex];

    return <p className={fadeIn ? 'title-fade-in' : 'title-fade-out'}>I am {title}</p>;
  }
}

export default Title;
