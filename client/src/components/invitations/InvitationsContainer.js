import React from 'react';
import { useUserData } from '../../context/userContext';
import Invitation from './Invitation';

function InvitationsContainer() {
  const { userData } = useUserData();

  return (
    <>
      <div className="invitations-container">
        <h2 className="invitations__title">Invitations</h2>

        {userData.invitations.map(invitation => (
          <Invitation
            key={invitation.invitationId}
            invitationId={invitation.invitationId}
            issuedBy={invitation.issuedBy}
            projectId={invitation.projectId} />
        ))}

      </div>
    </>
  );
}

export default InvitationsContainer;