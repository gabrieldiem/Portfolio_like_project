import React, { Component } from "react";

import Projects from "./Projects";
import Profiles from "./SocialProfiles";
import profilePic from "../assets/profile.png";
import Title from "./Title";
import Jokes from "./Jokes";

class App extends Component {

    constructor(){
        super();
        this.state = { displayBio: false };
        
        this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
    }

    state = { displayBio: false };

    toggleDisplayBio = () => {
        this.setState({ displayBio: !this.state.displayBio });
    }

    render(){

        return (
            <div>
                <img src={profilePic} alt="profile pic" className="profilePic"/>
                <h1>Hello!</h1>
                <Title />
                <p>My name is Gabriel</p>
                <p>I'm always looking forward to working on meaningful projects.</p>
                { 
                    this.state.displayBio ? (
                        <div>
                            <p>I live in Buenos Aires and I code every day.</p>
                            <p>My favourite language is JavaScript and I'm currently learning ReactJS!</p>
                            <p>Besides coding, I also like videogames and music!</p>
                            <button onClick={this.toggleDisplayBio}>Show less</button>
                        </div>
                    ) : (
                        <div>
                            <button onClick={this.toggleDisplayBio}>Read more</button>
                        </div>
                    )
                }
                <hr/>
                <Projects />
                <hr/>
                <Profiles />
                <hr />
                <Jokes />
            </div>
        );
    }
}

export default App;