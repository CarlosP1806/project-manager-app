import React, { useEffect, useState } from 'react';
import Auth from '../../utils/auth';
import './Invitation.css'

function Invitation({
  invitationId,
  issuedBy,
  projectId
}) {
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState("");
  const [project, setProject] = useState("");

  async function getUser() {
    let response = await fetch(`/users/${issuedBy}`);
    response = await response.json();
    setUser(response);
  }

  async function getProject() {
    let response = await fetch(`/projects/${projectId}`);
    response = await response.json();
    setProject(response);
  }

  useEffect(() => {
    setLoading(true);
    getUser();
    getProject();
    setLoading(false);
  }, [])

  if (loading) {
    return;
  }

  async function handleAcceptInvitation() {
    const token = Auth.getToken();
    const response = await fetch('/invitations/accept', {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        projectId: project._id,
        invitationId: invitationId
      })
    });
    if(!response.ok) {
      alert("something went wrong");
    } else {
      window.location.reload();
    }
  }

  async function handleDeclineInvitation() {
    const token = Auth.getToken();
    const response = await fetch('/invitations/decline', {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        invitationId: invitationId
      })
    });
    if(!response.ok) {
      alert("something went wrong");
    } else {
      window.location.reload();
    }
  }

  return (
    <article className="invitation">
      <p className="invitation__text">
        User <span>{user.username}</span> invited you to colaborate 
        on <span>{project.title}</span>
      </p>
      <div className="invitation__buttons">
        <button onClick={handleAcceptInvitation} id="accept">Accept</button>
        <button onClick={handleDeclineInvitation} id="decline">Decline</button>
      </div>
    </article>
  );
}

export default Invitation;