import React from 'react'
import { useProjectData } from '../../context/projectContext';
import './ViewTaskModal.css'

function ViewTaskModal({ taskId, onClose }) {

  const { data } = useProjectData();
  const currentTask = data.tasks.find(task => task._id === taskId);

  // Get header color
  function getColor() {
    switch (currentTask.category) {
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

  // Handle task delete
  async function onDeleteTask() {
    const response = await fetch(`/project/task/${currentTask._id}`, {
      method: 'DELETE',
    });
    if(!response.ok) {
      alert("Something went wrong");
    } else {
      onClose();
      window.location.reload();
    }
  }

  return (
    <>
      <article className="view-task-modal">
        <header
          className={`view-task-modal__header view-task-modal__header--${getColor()}`}>
          <div className="view-task-modal__close" onClick={onClose}>X</div>
        </header>
        <div className="view-task-modal__content">
          <div className="view-task-modal__left">
            <h2 className="view-task-modal__name">{currentTask.title}</h2>
            <section className="view-task-modal__section">
              <h3 className="view-task-modal__title">Description</h3>
            </section>
            <section className="view-task-modal__section">
              <h3 className="view-task-modal__title">Comments</h3>
            </section>
          </div>
          <aside className="view-task-modal__actions">
            <button className="view-task-modal__next">Mark as ...</button>
            <button className="view-task-modal__delete" onClick={onDeleteTask}>Delete</button>
          </aside>
        </div>
      </article>

      <div onClick={onClose} className="view-task-modal__overlay"></div>
    </>
  )
}

export default ViewTaskModal;