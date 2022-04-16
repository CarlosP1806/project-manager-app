import React, { useContext, useEffect, useState } from 'react';

const ProjectDataContext = React.createContext();

export function useProjectData() {
  return useContext(ProjectDataContext);
}

export const ProjectDataProvider = ({ children }) => {

  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    setLoading(true);
    let response = await fetch('/project/625afbb0b7e6ef28cbf8767a');
    response = await response.json();
    setData(response);
    setLoading(false);
  };

  useEffect(() => {
    getData()
  }, []);

  return (
    <ProjectDataContext.Provider value={{loading, data}}>
      {children}
    </ProjectDataContext.Provider>
  );
}