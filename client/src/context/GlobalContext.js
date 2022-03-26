import { createContext, useState } from "react";

export const GlobalContext = createContext(null)

export const GlobalProvider = ({children}) => {

const [user, setUser] = useState()

    return(
        <GlobalContext.Provider value={{user, setUser}}>
          {children}
        </GlobalContext.Provider>
    )
}