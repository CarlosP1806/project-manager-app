import React from 'react';
import { useProjectData } from '../../context/projectContext';
import './Members.css'

function Members() {

  const { data } = useProjectData();

  return (
    <>
      <div className="members-container">
        <form className="add-member-form">
          <input
            required
            type="text"
            placeholder="Invite member by username"
            className=" form__input add-member-form__input" />
          <button className="form__btn">Invite</button>
        </form>

        <div className="members">
        </div>
      </div>
    </>
  );
}

export default Members;