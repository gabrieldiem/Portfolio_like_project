import React from 'react';
import PROJECTS from '../data/projects';

const Project = (props) => {
  const { title, image, description, link } = props.project;

  return (
    <div style={{ display: 'inline-block', width: 300, margin: 10 }}>
      <h3>{title}</h3>
      <img src={image} alt='image of the project' style={{ width: 200, height: 120 }} />
      <p>{description}</p>
      <a href={link} target='_blank' rel='noreferrer'>{link}</a>
    </div>
  );
};

const Projects = () => (
  <div>
    <h2>Highlighted Projects</h2>
    {
		  PROJECTS.map(project => (
        <Project key={project.id} project={project} />
      ))
    }
  </div>
);

export default Projects;
