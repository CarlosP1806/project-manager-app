import React from 'react'
import './TaskCard.css'

function TaskCard({
  id,
  category,
  title,
  postedBy,
  labels
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
          {labels.length > 0 && (
            <div className="task-card__labels">
              {labels.map(label => (
                <span key={Date.now()} className="task-card__label">{label}</span>
              ))}
            </div>
          )}
        </div>
      </article>
    </>
  );
}

export default TaskCard