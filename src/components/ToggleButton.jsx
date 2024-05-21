import moonImg from '/images/Moon_fill.svg'
import sunImg from '/images/Sun_fill.svg'
import { DarkModeContext } from '../context/DarkMode'
import { useContext } from 'react'

export function ToggleButton() {

    const {darkMode, toggleDarkMode}  = useContext(DarkModeContext)

    return(
        <button 
            className={`rounded-md p-[12px] border ${darkMode ? 'bg-[#212936] border-[#4D5562]' : 'bg-[#FFFFFF] border-[#E5E7EB]'}`}
            onClick={toggleDarkMode}
        >
            <img className='size-[30px]' src={ darkMode ? sunImg : moonImg }></img>
        </button>
    )
}   