import React, { useContext, useEffect, useState } from 'react';

const ProjectDataContext = React.createContext();

export function useProjectData() {
  return useContext(ProjectDataContext);
}

export const ProjectDataProvider = ({ children }) => {
  const [projectId, setProjectId] = useState();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    setLoading(true);
    let response = await fetch(`/project/${projectId}`);
    response = await response.json();
    setData(response);
    setLoading(false);
  };

  useEffect(() => {
    if (projectId) {
      getData()
    }
  }, [projectId]);

  return (
    <ProjectDataContext.Provider value={{ setProjectId, loading, data }}>
      {children}
    </ProjectDataContext.Provider>
  );
}