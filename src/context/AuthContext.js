import React, { createContext, useContext, useState } from 'react';

const Context = createContext({});

export function AuthProvider({ children }) {
  const [open, setOpen] = useState(false);
  const [swipe, setSwipe] = useState(false);

  return (
    <Context.Provider value={{ open, setOpen, swipe, setSwipe }}>{children}</Context.Provider>
  );
}

export function useAuth() {
  return useContext(Context);
}

export function useSwipe(){
  return useContext(Context);
}
