import React, { createContext, useContext } from 'react'
import { IContextWithChildren } from './interface'
import axios from 'axios'

const AxiosContext = createContext({})

export const useAxiosContext = () => useContext(AxiosContext)

export const AxiosProvider: React.FC<IContextWithChildren> = ({ children }) => {
  axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL
  // axios.defaults.headers['Content-Type'] = 'application/json'

  return <AxiosContext.Provider value={{}}>{children}</AxiosContext.Provider>
}
