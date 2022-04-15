import React from 'react';
import TasksColumn from '../components/TasksColumn';

function ProjectTasks() {
  return (
    <>
      <section className="section section--tasks">
        <header className="section__header">
          <h1 className="section__title">Board of Tasks</h1>
        </header>

        <TasksColumn columnTitle="In Progress"/>

      </section>
    </>
  );
}

export default ProjectTasks;