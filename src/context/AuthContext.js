import React, { createContext, useContext, useState } from 'react';

const Context = createContext({});

export function AuthProvider({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <Context.Provider value={{ open, setOpen }}>{children}</Context.Provider>
  );
}

export function useAuth() {
  return useContext(Context);
}
