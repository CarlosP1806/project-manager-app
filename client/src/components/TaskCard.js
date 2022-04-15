import React from 'react'
import './TaskCard.css'

function TaskCard({
  id,
  title
}) {
  return (
    <>
      <article class="task-card" id={id}>
        <h3 className="task-card__title">{title}</h3>
      </article>
    </>
  );
}

export default TaskCard