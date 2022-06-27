import React from 'react';
import '../styles/Project.css';

const ProjectItem = ({ image, name, link }) => {
  const openProject = () => {
    window.open(link, '_blank');
  };

  return (
    <div className='projectItem' onClick={openProject}>
      <div style={{ backgroundImage: `url(${image})` }} className='bgImage' />
      <h1> {name} </h1>
    </div>
  );
};

export default ProjectItem;
