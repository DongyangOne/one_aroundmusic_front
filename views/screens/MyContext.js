import React, { createContext, useContext, useState } from 'react';


const Context = createContext({})

export function DialogProvider({ children }) {
  const [open, setOpen] = useState(false)

//   const handleOpen = () => setOpen(true)
//   const handleClose = () => setOpen(false)
//   const handleUpdate=()=>{
//     setOpen = true;
//   }

  return <Context.Provider value={{ open, setOpen }}>{children}</Context.Provider>
}

export function useDialog() {
  return useContext(Context)
}
