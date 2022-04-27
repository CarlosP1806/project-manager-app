import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './AdminSettings.css';

function AdminSettings() {

  const { id } = useParams();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  async function handleProjectDelete() {
    const response = await fetch(`/projects/${id}`, {
      method: "DELETE"
    });
    if (!response.ok) {
      alert("something went wrong");
    } else {
      window.location.assign('/dashboard');
    }
  }

  async function handleUpdateTitle(event) {
    event.preventDefault();
    const response = await fetch('/projects', {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        _id: id,
        title: title
      })
    });
    if (!response.ok) {
      alert("something went wrong");
    } else {
      window.location.reload();
    }
  }

  async function handleUpdateDescription(event) {
    event.preventDefault();
    const response = await fetch('/projects', {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        _id: id,
        description: description
      })
    });
    if (!response.ok) {
      alert("something went wrong");
    } else {
      window.location.reload();
    }
  }

  return (
    <>
      <section className="admin-settings">
        <h2 className="overview__header">Admin Settings</h2>

        <form className="form form--settings" onSubmit={handleUpdateTitle}>
          <div className="form__row">
            <label className="form__label" htmlFor="title">Update title:</label>
            <input
              id="title"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="form__input"
              type="text" />
          </div>
          <button className="form__btn">Change Title</button>
        </form>

        <form className="form form--settings" onSubmit={handleUpdateDescription}>
          <div className="form__row">
            <label className="form__label" htmlFor="description">Update description:</label>
            <textarea
              id="description"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="form__input" />
          </div>
          <button className="form__btn">Change Description</button>
        </form>

        <button
          className="overview__delete"
          onClick={handleProjectDelete}>
          Delete Project
        </button>
      </section>
    </>
  )
}

export default AdminSettings;