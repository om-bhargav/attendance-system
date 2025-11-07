import React, { createContext ,useContext,useState} from 'react'
const userContext = createContext(null);

export default userContext;

export const ContextUser = () => useContext(userContext);

const ContextProvider = ({children,...props}:React.PropsWithChildren)=>{
    const [user,setUser] = useState<any>(null);
    const [isLoggedIn,setIsLoggedIn] = useState<boolean>(false);
    const args:any = {
        user,
        setUser,
        isLoggedIn,
        setIsLoggedIn
    }
    return <userContext.Provider value={args}>
        {children}
    </userContext.Provider>
}

export {ContextProvider};