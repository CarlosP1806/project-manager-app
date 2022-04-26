import React, { useState } from 'react'
import './AddTaskModal.css'
import { useParams } from 'react-router-dom';
import { useUserData } from '../../context/userContext';

function AddTaskModal({
  onClose,
}) {
  const { id } = useParams();
  const { userData } = useUserData();

  const [form, setForm] = useState({
    title: "",
    author: userData.username,
    category: "",
    status: "",
    projectId: id,
    description: "",
    dueDays: ""
  });

  function handleInputChange(e) {
    setForm(prevForm => {
      return { ...prevForm, [e.target.name]: e.target.value }
    });
  }

  async function handleFormSubmit(event) {
    event.preventDefault()

    const response = await fetch('/projects/task', {
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
              <label className="form__label" htmlFor="title">Task Title:</label>
              <input
                required
                className="form__input"
                type="text"
                id="title"
                name="title"
                onChange={handleInputChange} />
            </div>
            <div className="form__row">
              <label className="form__label" htmlFor="description">Brief Description:</label>
              <textarea
                required
                className="form__input"
                id="description"
                name="description"
                rows="3"
                onChange={handleInputChange} />
            </div>
            <div className="form__row">
              <label className="form__label" htmlFor="category">Category:</label>
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
              <label className="form__label" htmlFor="status">Status:</label>
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
            <div className="form__row">
              <label className="form__label" htmlFor="dueDays">Expected Time (Days):</label>
              <input
                required
                className="form__input form__input--small"
                type="number"
                id="dueDays"
                name="dueDays"
                min="1"
                max="50"
                onChange={handleInputChange} />
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