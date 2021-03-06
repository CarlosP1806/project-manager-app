import React, { useState } from 'react';
import './ProjectTasks.css';

import TasksColumn from '../../components/task_cards/TasksColumn';
import { useProjectData } from '../../context/projectContext';
import AddTaskModal from '../../components/task_cards/AddTaskModal';
import ViewTaskModal from '../../components/task_cards/ViewTaskModal';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

function ProjectTasks() {
  const { data } = useProjectData();
  const [showAddTaskModal, setShowAddTaskModal] = useState(false);
  const [currentModal, setCurrentModal] = useState();

  (showAddTaskModal || currentModal) ? disableBodyScroll(document) : enableBodyScroll(document); 

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
          <TasksColumn
            columnTitle="request"
            cards={data.tasks}
            setViewModal={setCurrentModal} />
          <TasksColumn
            columnTitle="in progress"
            cards={data.tasks}
            setViewModal={setCurrentModal} />
          <TasksColumn
            columnTitle="review"
            cards={data.tasks}
            setViewModal={setCurrentModal} />
          <TasksColumn
            columnTitle="completed"
            cards={data.tasks}
            setViewModal={setCurrentModal} />
        </div>
      </section>

      {showAddTaskModal && (
        <AddTaskModal onClose={() => setShowAddTaskModal(false)} />
      )}

      {currentModal && (
        <ViewTaskModal taskId={currentModal} onClose={() => setCurrentModal()}/>
      )}

    </>
  );
}

export default ProjectTasks;