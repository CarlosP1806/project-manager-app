import React from 'react';
import './ProjectTasks.css';

import TasksColumn from '../components/TasksColumn';

function ProjectTasks() {

  // TODO: Change this to fetch database
  const cards = [
    {
      id: "0001",
      title: "Testing Issue 1"
    },
    {
      id: "0002",
      title: "Testing Issue 2"
    },
    {
      id: "0003",
      title: "Testing Issue 3"
    },
    {
      id: "0004",
      title: "Testing Issue 4"
    },
    {
      id: "0005",
      title: "Testing Issue 5"
    }
  ];

  return (
    <>
      <section className="section section--tasks">
        <header className="section__header">
          <h1 className="section__title">Board of Tasks</h1>
        </header>
        <div className="tasks__column-container">
          <TasksColumn columnTitle="In Progress" cards={cards} />
          <TasksColumn columnTitle="In Progress" cards={cards} />
          <TasksColumn columnTitle="In Progress" cards={cards} />
        </div>
      </section>
    </>
  );
}

export default ProjectTasks;