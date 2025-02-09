import React, { ReactNode, useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import { UserData } from "./UserContext";

const AuthProvider = ({children}: {children: ReactNode}) => {
    const [isLogged, setIsLogged] = useState(false);
    const [user, setUser] = useState<UserData | null>(null);

    useEffect(() => {
        const storedIsLogged = sessionStorage.getItem('isLogged');
        const storedUser = sessionStorage.getItem('user');
    
        if (storedIsLogged) {
          setIsLogged(JSON.parse(storedIsLogged));
        }
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
      }, []);

    const login = (userData: UserData | null) => {
        setIsLogged(true);
        setUser(userData);

        // save info 
        sessionStorage.setItem('isLogged', 'true');
        sessionStorage.setItem('user', JSON.stringify(userData));
    };

    const logout = () => {
        setIsLogged(false);
        setUser(null);

        // remove 
        sessionStorage.removeItem('isLogged');
        sessionStorage.removeItem('user');
    };

    return (
        <React.Fragment>
            <AuthContext.Provider value={{isLogged, user, login, logout}}>
                {children}
            </AuthContext.Provider>
        </React.Fragment>
    )
};

export default AuthProvider;