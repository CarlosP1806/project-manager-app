import React from 'react';
import './ProjectCard.css';

function ProjectCard({
  title,
  id
}) {

  function handleClick() {
    window.location.assign(`/project/${id}/tasks`);
  }

  return (
    <>
      <article className="project-card" onClick={handleClick}>
          <h2 className="project-card__title">{title}</h2>
      </article>
    </>
  )
}

export default ProjectCard;