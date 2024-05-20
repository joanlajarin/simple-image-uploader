import { DarkModeContext } from "../context/DarkMode"
import { useContext } from 'react'
import donwloadImg from '/images/download.svg'
import linkImg from '/images/Link.svg'


export function UploadSucces({imgToShow}) {

    const {darkMode}  = useContext(DarkModeContext)

    const shareImg = () => {

    }
    const downloadImg = () => {

    }

    return( 
        <section className={`${darkMode ? 'bg-[#212936]': 'bg-[#F9FAFBCC] shadow-xl' } 
                        rounded-md p-[8px] w-[540px]  mx-auto my-auto flex flex-col gap-[24px] items-center`}
        >
            <img src={imgToShow} className="rounded-md"></img>
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