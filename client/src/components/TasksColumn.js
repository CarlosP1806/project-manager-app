import React from 'react'
import './TaskColumn.css';
import TaskCard from './TaskCard';

function TasksColumn({
  columnTitle,
  cards
}) {

  const columnCards = cards.filter(card => card.status === columnTitle);

  return (
    <>
      <section className="task-column">
        <header className="task-column__header">
          <h2 className="task-column__title">{columnTitle}</h2>
          <span className="task-column__counter">({columnCards.length})</span>
        </header>
        <div className="task-column__cards">
          {columnCards.map(card => (
            <TaskCard
              key={card._id}
              id={card._id}
              category={card.category}
              title={card.title}
              postedBy={card.author}
              labels={card.labels} />
          ))}
        </div>
      </section>
    </>
  );
}

export default TasksColumn;