import React, { useState } from 'react'
import Auth from '../../utils/auth';
import './AddProjectModal.css';

function AddProjectModal({
  user,
  onClose
}) {

  const [formInput, setFormInput] = useState({
    title: ""
  });

  function handleInputChange(event) {
    setFormInput(prev => {
      return {
        ...prev, [event.target.name]: event.target.value
      }
    });
  }

  async function handleCreateProject(event) {
    event.preventDefault();

    const token = Auth.getToken();
    const projectData = {
      title: formInput.title,
      ownerId: user._id
    }

    const response = await fetch('/project', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`
      },
      body: JSON.stringify(projectData)
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
      <article className="add-project-modal">
        <header className="add-project-modal__header">
          <h3 className="add-project-modal__title">Add Project</h3>
          <div className="add-project-modal__close" onClick={onClose}>X</div>
        </header>
        <div className="add-project-modal__content">
          <form className="form add-project-modal__form" onSubmit={handleCreateProject}>
            <div className="form__row">
              <label className="form__label" htmlFor="title">Project Title:</label>
              <input
                required
                id="title"
                name="title"
                className="form__input"
                type="text"
                onChange={handleInputChange} />
            </div>
            <button className="form__btn">Create</button>
          </form>
        </div>
      </article>

      <div className="modal__overlay" onClick={onClose}></div>
    </>
  );
}

export default AddProjectModal;