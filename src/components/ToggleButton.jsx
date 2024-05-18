import moonImg from '/images/Moon_fill.svg'
import sunImg from '/images/Sun_fill.svg'
import { DarkModeContext } from '../context/DarkMode'
import { useContext } from 'react'

export function ToggleButton() {

    const {darkMode, toggleDarkMode}  = useContext(DarkModeContext)


    return(
        <button 
            className="rounded-md p-[12px] border border-[#E5E7EB]"
            onClick={toggleDarkMode}
        >
            <img src={ darkMode ? sunImg : moonImg }></img>
        </button>
    )
}   