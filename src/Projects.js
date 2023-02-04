import React, {Component} from "react";
import PROJECTS from "./data/projects";

class Project extends Component {
    render(){

        const { title, image, description, link } = this.props.project;

        return (
            <div style={{ display: "inline-block", width: 300, margin: 10 }}>
                <h3>{title}</h3>
                <img src={image} alt="image of the project" style={{ width: 200, height: 120 }}/>
                <p>{description}</p>
                <a href={link} target="_blank">{link}</a>
            </div>
        );
    }
}

class Projects extends Component {
    render(){
        return (
            <div>
                <h2>Highlighted Projects</h2>
                {
                    PROJECTS.map(project => {
                        return(
                            <Project key={project.id} project={project} />
                        );
                    })
                }
            </div>
        );
    }
}

export default Projects;