import { func } from 'prop-types';
import React, { createContext, useContext, useState } from 'react';

const Context = createContext({});

export function AuthProvider({ children }) {
  const [open, setOpen] = useState(false);
  const [swipe, setSwipe] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  return (
    <Context.Provider value={{ open, setOpen, swipe, setSwipe, isLogin, setIsLogin}}>{children}</Context.Provider>
  );
}

export function useAuth() {
  return useContext(Context);
}

export function useSwipe(){
  return useContext(Context);
}

export function useLogin(){
  return useContext(Context);
}
