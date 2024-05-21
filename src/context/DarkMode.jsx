import React, { createContext, useState } from 'react'

const DarkModeContext = createContext()

function DarkModeProvider(props) {

    const [darkMode, setDarkMode] = useState(false)

    const toggleDarkMode = () => {
        const className = !darkMode ? 'dark' : 'light'
        document.documentElement.className = className
        setDarkMode(!darkMode)
    }

    return (  
        <DarkModeContext.Provider value={{darkMode, toggleDarkMode}}>
            {props.children}
        </DarkModeContext.Provider>
    )
}

export {DarkModeContext, DarkModeProvider}