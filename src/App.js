import React, { useState } from "react";

import "./App.css";
import Main from "./components/Main";
import { ThemeContext } from "./store/ThemeContext";

const App = () => {
    const [darkMode, setDarkMode] = useState(true)

	const toggleDarkMode = () => setDarkMode(!darkMode)

	return (
		<ThemeContext.Provider value={{darkMode, toggleDarkMode}}>
			<Main></Main>
		</ThemeContext.Provider>
	);
};

export default App;
