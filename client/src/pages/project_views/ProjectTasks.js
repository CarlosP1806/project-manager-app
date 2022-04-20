import React, { useState } from 'react';
import './ProjectTasks.css';

import TasksColumn from '../../components/task_cards/TasksColumn';
import { useProjectData } from '../../context/projectContext';
import AddTaskModal from '../../components/task_cards/AddTaskModal';

function ProjectTasks() {
  const { data } = useProjectData();
  const [showAddTaskModal, setShowAddTaskModal] = useState(false);

  return (
    <>
      <section className="section section--tasks">
        <header className="section__header">
          <h1 className="section__title">Board of Tasks</h1>
          <button
            className="tasks__add-btn"
            onClick={() => setShowAddTaskModal(true)}>
            Add Task
          </button>
        </header>
        <div className="tasks__column-container">
          <TasksColumn columnTitle="request" cards={data.tasksIds} />
          <TasksColumn columnTitle="in progress" cards={data.tasksIds} />
          <TasksColumn columnTitle="review" cards={data.tasksIds} />
          <TasksColumn columnTitle="completed" cards={data.tasksIds} />
        </div>
      </section>

      {showAddTaskModal && (
        <AddTaskModal onClose={() => setShowAddTaskModal(false)}/>
      )}
    </>
  );
}

export default ProjectTasks;