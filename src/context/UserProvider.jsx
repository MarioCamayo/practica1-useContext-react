
import {Children, createContext, useState} from 'react'

export const UserContext =  createContext(null)

export const UserProvider = ({children})=>{
  const [name, setName] = useState('Bienvenido')
  return(
      <UserContext.Provider value={ [name,setName]}>
        {children}
      </UserContext.Provider>

  )
}