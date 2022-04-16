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
      status: "in progress",
      postedBy: "CarlosP1806",
      labels: ["urgent"]
    },
    {
      id: "0002",
      category: "feature",
      title: "Testing Issue 2",
      status: "review",
      postedBy: "CarlosP1806"
    },
    {
      id: "0003",
      category: "warning",
      title: "Testing Issue 3",
      status: "in progress",
      postedBy: "CarlosP1806"
    },
    {
      id: "0004",
      category: "other",
      title: "Testing Issue 4",
      status: "completed",
      postedBy: "CarlosP1806"
    },
    {
      id: "0005",
      category: "feature",
      title: "Testing Issue 5",
      status: "request",
      postedBy: "CarlosP1806"
    },
    {
      id: "0006",
      category: "feature",
      title: "Testing Issue 6",
      status: "request",
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
          <TasksColumn columnTitle="request" cards={cards} />
          <TasksColumn columnTitle="in progress" cards={cards} />
          <TasksColumn columnTitle="review" cards={cards} />
          <TasksColumn columnTitle="completed" cards={cards} />
        </div>
      </section>
    </>
  );
}

export default ProjectTasks;