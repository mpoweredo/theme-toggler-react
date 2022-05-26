import React, { useContext } from "react";
import { ThemeContext } from "../store/ThemeContext";

import './SwitchButton.css'


import DarkModeIcon from '@mui/icons-material/DarkMode';

const SwitchButton = (props) => {
    const theme = useContext(ThemeContext)

    return <button type="button" onClick={theme.toggleDarkMode} className={`button ${theme.darkMode ? 'dark' : 'light'}`}>
        <DarkModeIcon />
    </button>
}

export default SwitchButton