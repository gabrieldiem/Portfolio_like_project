import React, { Component } from 'react';
import SOCIAL_PROFILES from './data/socialProfiles';

class Profile extends Component {
    render(){

        const { image, link } = this.props.profile;

        return (
            <span>
                <a href={link} target="_blank">
                    <img src={image} alt="image of the profile" style={{ width: 35, height: 35, margin: 10 }}/>
                </a>
            </span>
        );
    }
}

class Profiles extends Component {
    render(){
        return (
            <div>
                <h2>Connect with me!</h2>
                {
                    SOCIAL_PROFILES.map(profile => {
                        return(
                            <Profile key={profile.id} profile={profile} />
                        );
                    })
                }
            </div>
        );
    }
}

export default Profiles