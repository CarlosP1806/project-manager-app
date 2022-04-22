import React, { useEffect, useState } from 'react'
import './TaskCommentContainer.css';
import TaskComment from './TaskComment';
import { useUserData } from '../../context/userContext';

function TaskCommentContainer({
  currentTask
}) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const { userData } = useUserData();

  useEffect(() => {
    getComments();
  });

  async function getComments() {
    let response = await fetch(`/project/task/${currentTask._id}`);
    response = await response.json();
    setComments(response.comments);
  }

  async function handleAddComment(event) {
    event.preventDefault();

    const comment = {
      author: userData.username,
      content: newComment,
      commentId: (Math.random() + 1).toString(36).substring(7)
    };
    const updatedComments = [...comments, comment];
    setComments(updatedComments);
    const response = await fetch('/project/task', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        _id: currentTask._id,
        comments: updatedComments
      })
    });
    if (!response.ok) {
      alert("something went wrong");
    } else {
      setNewComment("");
    }
  }

  return (
    <>
      <form className="view-task-modal__add-comment" onSubmit={handleAddComment}>
        <input
          required
          className="add-comment__input"
          placeholder="Write a comment"
          type="text"
          name="comment"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          id="comment" />
        <button className="add-comment__btn">Save</button>
      </form>

      {comments.map(comment => (
        <TaskComment
          key={comment.commentId}
          author={comment.author}
          content={comment.content} />
      ))}
    </>
  )
}

export default TaskCommentContainer;