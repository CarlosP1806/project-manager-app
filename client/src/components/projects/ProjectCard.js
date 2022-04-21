import React from 'react';
import './ProjectCard.css';

function ProjectCard({
  title
}) {
  return (
    <>
      <article className="project-card">
          <h2 className="project-card__title">{title}</h2>
      </article>
    </>
  )
}

export default ProjectCard;