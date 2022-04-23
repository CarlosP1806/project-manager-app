import React, { useState } from 'react';
import { useProjectData } from '../../context/projectContext';
import { useUserData } from '../../context/userContext';
import Auth from '../../utils/auth';
import './Members.css'

function Members() {
  const { data } = useProjectData();
  const { userData } = useUserData();

  const [username, setUsername] = useState();

  async function handleInviteMember(event) {
    event.preventDefault();

    const token = Auth.getToken();
    const response = await fetch('/invite', {
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
              {userData._id !== member._id && (
                <div className="member__delete">X</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Members;