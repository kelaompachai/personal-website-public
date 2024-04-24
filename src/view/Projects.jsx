import React from 'react';
import projectsList from '../model/projects';
import ImageButton from './ImageButton';

function Projects() {
  // for every project, make a clickable square screenshot with a title above it
  const projectsComponents = projectsList.map(
    (el, index) => <ImageButton title={el.title} link={el.link} image={el.image} key={`Project ${index}`}/>
  );

  return (
    <div className="grid grid-cols-2 gap-4">
      {projectsComponents}
    </div>
  );
}

export default Projects;
