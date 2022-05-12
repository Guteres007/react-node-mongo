import {createContext, useState} from "react";


export const THEMES = {
    light: {
        foreground: "#000000",
        background: "#eeeeee"
    },
    dark: {
        foreground: "#ffffff",
        background: "#222222"
    }
};

export const ThemeContext = createContext()

export const ThemeProvider = ({children}) => {
    
    const [theme, setTheme] = useState(THEMES.dark)

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}