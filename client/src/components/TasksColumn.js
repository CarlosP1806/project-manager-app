import React from 'react'
import TaskCard from './TaskCard';

function TasksColumn({
  columnTitle,
  cards
}) {
  return (
    <>
      <section className="task-column">
        <header className="task-column__header">
          <h2 className="task-column__title">{columnTitle}</h2>
         <span className="task-column__counter">0</span>
        </header>
        <div className="task-column__cards">
          {cards.map(card => (
            <TaskCard key={card.id} id={card.id} title={card.title}/>
          ))} 
        </div>
      </section>
    </>
  );
}

export default TasksColumn;