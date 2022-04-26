import React from 'react'
import Members from '../../components/project_summary/Members';
import { useProjectData } from '../../context/projectContext';
import { useParams } from 'react-router-dom';
import './ProjectSummary.css'
import { useUserData } from '../../context/userContext';

function ProjectOverview() {

  const { data } = useProjectData();
  const { userData } = useUserData();
  const { id } = useParams();

  function isProjectOwner() {
    return userData._id === data.ownerId;
  }

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

  return (
    <>
      <section className="section section--overview">
        <header className="section__header">
          <h1 className="section__title">Project Summary</h1>
        </header>
        <div className="overview__container">
          <div className="overview__left">
            <article className="overview__description">
              <h2 className="overview__header">Description</h2>
              <p className="overview__text">
                {data.description}
              </p>
            </article>
            <article className="overview__members">
              <h2 className="overview__header">Active Members</h2>
              <Members />
            </article>
          </div>
          <div className="overview__right">
            <article className="overview__details">
              <h2 className="overview__header">Details</h2>
              These are other details

              {isProjectOwner() && (
                <button
                  className="overview__delete"
                  onClick={handleProjectDelete}>
                  Delete Project
                </button>
              )}
            </article>
          </div>
        </div>
      </section>
    </>
  )
}

export default ProjectOverview;