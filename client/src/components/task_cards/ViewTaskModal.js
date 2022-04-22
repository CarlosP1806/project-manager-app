import React from 'react'
import { useProjectData } from '../../context/projectContext';
import TaskCommentContainer from './TaskCommentContainer';
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

  // Return days to completion
  function getDueDate() {
    const dueDate = new Date(currentTask.createdAt);
    dueDate.setDate(dueDate.getDate() + currentTask.dueDays);
    const today = new Date();

    const oneDay = 24 * 60 * 60 * 1000;
    const difference = Math.round(Math.abs((dueDate - today) / oneDay));
    return difference;
  }

  // Return next status of card
  function getNextStatus() {
    switch (currentTask.status) {
      case "request":
        return "in progress";
      case "in progress":
        return "review";
      case "review":
        return "completed";
      case "completed":
        return null;
      default:
        return null;
    }
  }

  async function handleUpdateStatus() {
    const response = await fetch('/project/task', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        _id: currentTask._id,
        status: getNextStatus()
      })
    });
    if (!response.ok) {
      alert("something went wrong");
    } else {
      onClose();
      window.location.reload();
    }
  }

  // Handle task delete
  async function onDeleteTask() {
    const response = await fetch(`/project/task/${currentTask._id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
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
            <p className="view-task-modal__due">Due {getDueDate()} days</p>
            <section className="view-task-modal__section">
              <h3 className="view-task-modal__title">Description</h3>
              <p className="view-task-modal__description">
                {currentTask.description}
              </p>
            </section>
            <section className="view-task-modal__section">
              <h3 className="view-task-modal__title">Comments</h3>
                <TaskCommentContainer currentTask={currentTask}/>
            </section>
          </div>
          <aside className="view-task-modal__actions">
            {getNextStatus() &&
              <button className="view-task-modal__next" onClick={handleUpdateStatus}>
                Mark as "{getNextStatus()}"
              </button>
            }
            <button className="view-task-modal__delete" onClick={onDeleteTask}>Delete</button>
          </aside>
        </div>
      </article>

      <div onClick={onClose} className="view-task-modal__overlay"></div>
    </>
  )
}

export default ViewTaskModal;