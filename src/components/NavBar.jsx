import logoImg from '/images/logo.svg'
import logoDarkImg from '/images/logo_dark.svg'
import { ToggleButton } from './ToggleButton'
import { DarkModeContext } from '../context/DarkMode'
import { useContext } from 'react'


export function NavBar() {

    const {darkMode}  = useContext(DarkModeContext)


    return(
        <div className={`flex justify-between px-[72px] py-[16px] border-b ${darkMode ?  'border-[#4D5562]' : 'border-[#E5E7EB]' }  items-center`}>
            <img className='h-[35px]' src={darkMode ? logoDarkImg : logoImg }></img>
            <ToggleButton/>
        </div>
    )
}