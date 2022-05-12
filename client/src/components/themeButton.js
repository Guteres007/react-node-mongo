import {useContext, useEffect} from "react";
import {ThemeContext, THEMES} from "../contexts/theme";


export default function ThemeButton() {
    
    const {theme, setTheme} = useContext(ThemeContext)
  
    useEffect(() => {
        console.log(theme)
    }, [theme])
    
    function changeTheme(){
        setTheme(THEMES.light)
    }
    
    return (
        <button onClick={changeTheme} style={{background: theme.background}}>Change {theme.background}</button>
    )
}