import logoImg from '/images/logo.svg'
import logoDarkImg from '/images/logo_dark.svg'
import { ToggleButton } from './ToggleButton'
import { DarkModeContext } from '../context/DarkMode'
import { LoadStateContext } from '../context/LoadState'
import { useContext } from 'react'


export function NavBar() {

    const {darkMode}  = useContext(DarkModeContext)
    const {changeLoading}  = useContext(LoadStateContext)

    const howToHome = () => {
        changeLoading("")
    }

    return(
        <div className={`flex justify-between px-[72px] py-[16px] border-b ${darkMode ?  'border-[#4D5562]' : 'border-[#E5E7EB]' }  items-center`}>
            <button onClick={howToHome}><img className='h-[35px]' src={darkMode ? logoDarkImg : logoImg }></img></button>
            <ToggleButton/>
        </div>
    )
}