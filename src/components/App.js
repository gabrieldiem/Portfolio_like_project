import React, { Component } from 'react';

import Projects from './Projects';
import Profiles from './SocialProfiles';
import profilePic from '../assets/profile.png';
import Title from './Title';

class App extends Component {
  constructor () {
    super();
    this.state = { displayBio: false };

    this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
  }

  state = { displayBio: false };

  toggleDisplayBio = () => {
    this.setState({ displayBio: !this.state.displayBio });
  };

  render () {
    return (
      <div>
        <img src={profilePic} alt='profile pic' className='profilePic' />
        <h1>Hey, welcome!</h1>
        <Title />
        <p>My name is Gabriel Diem</p>
        <p>I'm always looking forward to working on meaningful projects.</p>
        {
          this.state.displayBio
            ? (
              <div>
                <p>I live in the City of Buenos Aires</p>
                <p>I'm currently learning ReactJS!</p>
                <p>Besides coding, I also like videogames and music!</p>
                <button onClick={this.toggleDisplayBio}>Show less</button>
              </div>
					    )
            : (
              <div>
                <button onClick={this.toggleDisplayBio}>Read more</button>
              </div>
					    )
        }
        <hr />
        <Projects />
        <hr />
        <Profiles />
      </div>
    );
  }
}

export default App;
