import React from 'react'
import './ProjectOverview.css'

function ProjectOverview() {
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
                Fusce ultrices elit sapien, id condimentum nisi volutpat eu. Pellentesque id 
                sem quis magna ullamcorper maximus. Aliquam vel luctus ex. Nam convallis metus 
                risus, ut aliquet erat consectetur vitae. Etiam risus eros, convallis quis orci 
                vel, dignissim maximus eros. Suspendisse non laoreet urna. Curabitur egestas dapibus 
                erat efficitur efficitur.
              </p>
            </article>
            <article className="overview__members">
              <h2 className="overview__header">Active Members</h2>
              These are the project members
            </article>
          </div>
          <div className="overview__right">
            <article className="overview__details">
              <h2 className="overview__header">Details</h2>
              These are other details
            </article>
          </div>
        </div>
      </section>
    </>
  )
}

export default ProjectOverview;