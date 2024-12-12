
import React, { createContext, useState } from 'react';

// Create the context
export const addProjectContext = createContext();
export const editContextProject=createContext();

// Destructure children from props
const ContextShare = ({ children }) => {
  const [addProjectResponse, setAddProjectResponse] = useState("");
  const [editProjectResponse, setEditProjectResponse] = useState("");

  return (
    <addProjectContext.Provider value={{ addProjectResponse, setAddProjectResponse }}>
     <editContextProject.Provider value={{editProjectResponse,setEditProjectResponse}}>
       {children}
       </editContextProject.Provider>
    </addProjectContext.Provider>
  );
};

export default ContextShare;
