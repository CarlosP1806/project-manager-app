import React from 'react'
import './ViewTaskModal.css'

function ViewTaskModal({
  id,
  category,
  title,
  postedBy,
  labels
}) {
  return (
    <>
      <article className="view-task-modal">
        <header className="view-task-modal__header">X</header>
        <div className="view-task-modal__content">
          <h2 className="view-task-modal__title"></h2>
          
        </div>
      </article>
    </>
  )
}

export default ViewTaskModal;