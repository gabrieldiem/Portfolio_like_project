import React from 'react';
import SOCIAL_PROFILES from '../data/socialProfiles';

const Profile = (props) => {
    const { image, link } = props.profile;
 
    return (
        <span>
            <a href={link} target="_blank">
                <img src={image} alt="image of the profile" style={{ width: 35, height: 35, margin: 10 }}/>
            </a>
        </span>
    );
}

const Profiles = () => (
    <div>
        <h2>Connect with me!</h2>
        {
            SOCIAL_PROFILES.map(profile => (
                    <Profile key={profile.id} profile={profile} />
            ))
        }
    </div>
)

export default Profiles