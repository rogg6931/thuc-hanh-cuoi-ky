import React, { ReactNode, useEffect, useState } from "react";
import { DarkContext } from "../contexts/DarkContext";


const DarkProvider = ({children}: {children: ReactNode}) => {
    const [theme, setTheme] = useState(sessionStorage.getItem('theme') || 'light');

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        sessionStorage.setItem('theme', newTheme); // Lưu theme vào Storage
    };

    useEffect(() => {
        document.body.className = theme;
      }, [theme]);

    return (
        <React.Fragment>
            <DarkContext.Provider value={{theme, toggleTheme}}>
                {children}
            </DarkContext.Provider>
        </React.Fragment>
    )
};

export default DarkProvider;