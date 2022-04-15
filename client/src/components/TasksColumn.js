import React from 'react'

function TasksColumn({
  columnTitle,
}) {
  return (
    <>
      <section className="task-column">
        <header className="task-column__header">
          <h2 className="task-column__title">{columnTitle}</h2>
         <span className="task-column__counter">0</span>
        </header>
      </section>
    </>
  );
}

export default TasksColumn;