import arrowImg from '/images/exit.svg'
import { DarkModeContext } from "../context/DarkMode"
import { useContext } from 'react'

export function DragAndDropContainer() {

    const {darkMode}  = useContext(DarkModeContext)

    return (
        <section className={`${darkMode ? 'bg-[#212936]': 'bg-[#F9FAFBCC] shadow-xl' } rounded-md p-[8px] w-[540px]  mx-auto my-auto`}>
            <div className={`rounded-md border-2 ${darkMode ? 'border-[#4D5562]': 'border-[#E5E7EB]'} border-dashed py-[112px]`}>
                <div className="flex flex-col items-center">
                    <img className='size-[30px] mb-[20px]' src={arrowImg}></img>
                    <span className='text-[14px] font-medium  mb-[8px]'>Drag & drop a file or <span className='font-light text-[#3662E3]'>browse files</span></span>
                    <span className='text-[14px] font-light'>JPG, PNG or GIF - Max file size 2MB</span>
                </div>
            </div>
        </section>
    )
}