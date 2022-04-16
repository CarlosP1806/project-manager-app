import React, { useContext } from 'react';
import './ProjectTasks.css';

import TasksColumn from '../components/TasksColumn';
import { useProjectData } from '../context/projectContext';

function ProjectTasks() {

  const { data } = useProjectData();

  return (
    <>
      <section className="section section--tasks">
        <header className="section__header">
          <h1 className="section__title">Board of Tasks</h1>
        </header>
        <div className="tasks__column-container">
          <TasksColumn columnTitle="request" cards={data.tasksIds} />
          <TasksColumn columnTitle="in progress" cards={data.tasksIds} />
          <TasksColumn columnTitle="review" cards={data.tasksIds} />
          <TasksColumn columnTitle="completed" cards={data.tasksIds} />
        </div>
      </section>
    </>
  );
}

export default ProjectTasks;