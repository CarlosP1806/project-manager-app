import React from 'react';
import './TaskComment.css'

function TaskComment({
  author,
  content
}) {
  return (
    <>
      <article className="task-comment">
        <h3 className="task-comment__author">{author}</h3>
        <p className="task-comment__content">{content}</p>
      </article>
    </>
  );
}

export default TaskComment;