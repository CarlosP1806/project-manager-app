import React from 'react';
import './ProjectTasks.css';

import TasksColumn from '../components/TasksColumn';

function ProjectTasks() {

  // TODO: Change this to fetch database
  const cards = [
    {
      id: "0001",
      category: "bug",
      title: "Testing Issue 1",
      postedBy: "CarlosP1806",
      labels: ["urgent"]
    },
    {
      id: "0002",
      category: "feature",
      title: "Testing Issue 2",
      postedBy: "CarlosP1806"
    },
    {
      id: "0003",
      category: "warning",
      title: "Testing Issue 3",
      postedBy: "CarlosP1806"
    },
    {
      id: "0004",
      category: "other",
      title: "Testing Issue 4",
      postedBy: "CarlosP1806"
    },
  ];

  return (
    <>
      <section className="section section--tasks">
        <header className="section__header">
          <h1 className="section__title">Board of Tasks</h1>
        </header>
        <div className="tasks__column-container">
          <TasksColumn columnTitle="In Progress" cards={cards} />
          <TasksColumn columnTitle="Review" cards={cards} />
          <TasksColumn columnTitle="Completed" cards={cards} />
        </div>
      </section>
    </>
  );
}

export default ProjectTasks;