import React from 'react';
import ProjectItem from '../components/ProjectItem';
import { ProjectData } from '../data/ProjectData';
import '../styles/Project.css';

const Projects = () => {
  return (
    <div className='projects'>
      <h1> My personal projects</h1>
      <div className='projectList'>
        {ProjectData.map((project) => {
          return (
            <ProjectItem
              image={project.image}
              name={project.name}
              link={project.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
