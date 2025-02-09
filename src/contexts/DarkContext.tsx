import { createContext, useContext } from "react";

export const DarkContext = createContext({
    theme: 'light', // Giá trị mặc định là 'light'
    toggleTheme: () => {}, // Hàm mặc định không làm gì
});

export const useTheme = () => useContext(DarkContext);