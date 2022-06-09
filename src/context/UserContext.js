import { useState, createContext, useContext, useEffect } from 'react';
import useLocalStorage from '../useLocalStorage';

const Context = createContext();

export const UserContext = ({children}) => {
    const [inLocalStorage, setLocalStorage] = useLocalStorage();
    const [user, setUser] = useState(inLocalStorage('user') || '');
    console.log(user)

    useEffect(() => {
        setLocalStorage('user', user);
    },[user, setLocalStorage]);     

    const login = (data) => {
        setUser({
            user: data.user
        })
    }

    const logout = () => {
        setUser(null);
    }
    
    return(
        <Context.Provider value={{user, login, logout}}>
            {children}
        </Context.Provider>
    )
}

export const useUserContext = () => {
    return useContext(Context);
}