import { DarkModeContext } from "../context/DarkMode"
import { useContext } from 'react'


export function UploadLoader() {

    const {darkMode}  = useContext(DarkModeContext)


    return( 
        <section className={`${darkMode ? 'bg-[#212936]': 'bg-[#F9FAFBCC] shadow-xl' } 
                        rounded-md py-[32px] px-[80px] mx-auto my-auto flex flex-col gap-[16px] items-center`}
        >
            <span className="text-[14px]"><span className="font-bold">Uploading</span>, please wait..</span>
            <div className="h-[8px] w-[320px] bg-[#E5E7EB] rounded">
                <div className="rounded bg-[#3662E3] w-[52px] h-[8px] ml-[40px]"></div>
            </div>
        </section>
    )
}