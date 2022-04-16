import React, { useState } from 'react'
import './AddTaskModal.css'
import { useParams } from 'react-router-dom';

function AddTaskModal({
  onClose,
}) {
  const { id } = useParams();

  const [form, setForm] = useState({
    title: "",
    author: "CarlosP18", // TODO: Change author when auth API is created
    category: "",
    status: "",
    projectId: id
  });

  function handleInputChange(e) {
    setForm(prevForm => {
      return { ...prevForm, [e.target.name]: e.target.value }
    });
  }

  async function handleFormSubmit(event) {
    event.preventDefault()

    const response = await fetch('/project/task', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    });

    if (!response.ok) {
      alert("Something is not good");
    }
    else {
      onClose();
      window.location.reload();
    }

  }

  return (
    <>
      <article className="add-task-modal">
        <header className="add-task-modal__header">
          <h3 className="add-task-modal__title">Add Task</h3>
          <div className="add-task-modal__close" onClick={onClose}>X</div>
        </header>
        <div className="add-task-modal__content">
          <form className="form add-add-task__form" onSubmit={handleFormSubmit}>
            <div className="form__row">
              <div className="form__label" htmlFor="title">Task Title:</div>
              <input
                required
                className="form__input"
                type="text"
                id="title"
                name="title"
                onChange={handleInputChange} />
            </div>
            <div className="form__row">
              <div className="form__label" htmlFor="category">Category:</div>
              <select
                className="form__input"
                onChange={handleInputChange}
                name="category"
                id="category">
                <option value="">-- Please select option --</option>
                <option value="feature">Feature</option>
                <option value="warning">Warning</option>
                <option value="bug">Bug</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form__row">
              <div className="form__label" htmlFor="status">Status:</div>
              <select
                className="form__input"
                onChange={handleInputChange}
                name="status"
                id="status">
                <option value="">-- Please Select Option --</option>
                <option value="request">Request</option>
                <option value="in progress">In Progress</option>
                <option value="review">Review</option>
                <option value="completed">Completed</option>
              </select>
            </div>
            <button className="form__btn">Submit!</button>
          </form>
        </div>
      </article>

      <div className="modal__overlay" onClick={onClose}></div>
    </>
  )
}

export default AddTaskModal