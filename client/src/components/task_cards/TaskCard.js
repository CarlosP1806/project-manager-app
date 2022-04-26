import React from 'react'
import './TaskCard.css'

function TaskCard({
  id,
  category,
  title,
  postedBy,
}) {
  function getColor() {
    switch (category) {
      case "bug":
        return "red";
      case "warning":
        return "yellow";
      case "feature":
        return "green";
      default:
        return "blue";
    }
  }

  return (
    <>
      <article className="task-card" id={id}>
        <header className={`task-card__header task-card__header--${getColor()}`}>
          {category}
        </header>
        <div className="task-card__content">
          <h3 className="task-card__title">{title}</h3>
          <p className="task-card__author">Issued by: {postedBy}</p>
        </div>
      </article>
    </>
  );
}

export default TaskCard