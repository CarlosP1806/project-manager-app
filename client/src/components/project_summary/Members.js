import React, { useState } from 'react';
import { useProjectData } from '../../context/projectContext';
import { useUserData } from '../../context/userContext';
import Auth from '../../utils/auth';
import './Members.css'

function Members() {
  const { data } = useProjectData();
  const { userData } = useUserData();

  const [username, setUsername] = useState();

  function isProjectOwner() {
    return userData._id === data.ownerId;
  }

  async function handleDeleteMember(userId) {
    const token = Auth.getToken();
    const response = await fetch('/invitations/remove-member', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        userId: userId,
        projectId: data._id
      })
    });
    if (!response.ok) {
      alert("something went wrong");
    } else {
      window.location.reload();
    }
  }

  async function handleInviteMember(event) {
    event.preventDefault();

    const token = Auth.getToken();
    const response = await fetch('/invitations', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        issuedBy: userData._id,
        projectId: data._id,
        username: username
      })
    });

    if (!response.ok) {
      alert("Something went wrong");
    } else {
      alert("Invitation sent!");
      window.location.reload();
    }
  }

  return (
    <>
      <div className="members-container">
        <form
          onSubmit={handleInviteMember}
          className="add-member-form">
          <input
            required
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Invite member by username"
            className=" form__input add-member-form__input" />
          <button className="form__btn">Invite</button>
        </form>

        <div className="members">
          {data.members.map(member => (
            <div key={member._id} className="member">
              <div className="member__username">{member.username}</div>
              {isProjectOwner() && userData._id !== member._id && (
                <div
                  className="member__delete"
                  onClick={() => handleDeleteMember(member._id)}>
                  X
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Members;