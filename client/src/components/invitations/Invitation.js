import React, { useEffect, useState } from 'react';

function Invitation({
  issuedBy,
  projectId
}) {

  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState("");
  const [project, setProject] = useState("");

  async function getUser() {
    let response = await fetch(`/user/${issuedBy}`);
    response = await response.json();
    setUser(response);
  }

  async function getProject() {
    let response = await fetch(`/project/${projectId}`);
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

  return (
    <article className="invitation">
      <p className="invitation text">
        User {user.username} invited you to colaborate on {project.title}
      </p>
    </article>
  );
}

export default Invitation;