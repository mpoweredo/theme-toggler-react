import React, { useContext } from "react";
import { ThemeContext } from "../store/ThemeContext";

import './Main.css'
import SwitchButton from "./SwitchButton";

const Main = () => {
    const theme = useContext(ThemeContext)
    // const changeThemeHandler = () => setDarkMode(!darkMode)

    console.log(theme.darkMode)
    return (
        <main className={`main ${theme.darkMode ? 'dark' : 'light'}`}>
            <h1>Switch theme</h1>
            <SwitchButton />
        </main>
    );
}

export default Main;