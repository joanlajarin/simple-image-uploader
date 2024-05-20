import { DarkModeContext } from "../context/DarkMode"
import { PhotoContext } from "../context/Photo"

import { useContext } from 'react'
import donwloadImg from '/images/download.svg'
import linkImg from '/images/Link.svg'


export function UploadSucces() {

    const {darkMode}  = useContext(DarkModeContext)
    const {urlPhoto}  = useContext(PhotoContext)

    const shareImg = () => {

    }
    const downloadImg = () => {

    }

    return( 
        <section className={`${darkMode ? 'bg-[#212936]': 'bg-[#F9FAFBCC] shadow-xl' } 
                        rounded-md p-[8px] w-[540px]  mx-auto my-auto flex flex-col gap-[24px] items-center`}
        >
            <img src={urlPhoto} className="rounded-md"></img>
            <div className="flex gap-[8px] items-center">
                <button 
                    className="bg-[#3662E3] rounded py-[8px] px-[12px] flex gap-[4px] items-center justify-center"
                    onClick={shareImg}
                >
                    <img src={linkImg} className="size-[18px]"></img>
                    <span className="text-[12px] text-[#FFFFFF]">Share</span>
                </button>
                <button 
                    className="bg-[#3662E3] rounded py-[8px] px-[12px] flex gap-[4px] items-center justify-center"
                    onClick={downloadImg}
                >
                    <img src={donwloadImg} className="size-[18px]"></img>
                    <span className="text-[12px] text-[#FFFFFF]">Download</span>
                </button>
            </div>
        </section>
    )
}