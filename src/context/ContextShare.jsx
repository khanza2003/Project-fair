
import React, { createContext, useState } from 'react';

// Create the context
export const addProjectContext = createContext();

// Destructure children from props
const ContextShare = ({ children }) => {
  const [addProjectResponse, setAddProjectResponse] = useState("");

  return (
    <addProjectContext.Provider value={{ addProjectResponse, setAddProjectResponse }}>
      {children}
    </addProjectContext.Provider>
  );
};

export default ContextShare;
