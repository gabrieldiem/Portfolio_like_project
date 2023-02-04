import React, {Component} from 'react';

const TITLES = [
    "a software engineer",
    "a science lover",
    "an enthusiastic learner",
    "an adventure seaker"
];

class Title extends Component {
    state = { titleIndex: 0 };

    componentDidMount(){
        this.animateTitles();
    }

    componentWillUnmount(){
        
    }

    animateTitles = () => {
        setInterval(() => {
            const newIndex = (this.state.titleIndex + 1) % TITLES.length;
            this.setState({ titleIndex: newIndex });
        }, 4000);
    }

    render(){
        const title = TITLES[this.state.titleIndex];

        return <p>I am {title}</p>
    }
}

export default Title;