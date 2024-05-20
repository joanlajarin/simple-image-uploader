import arrowImg from '/images/exit.svg'
import { DarkModeContext } from "../context/DarkMode"
import { LoadStateContext } from "../context/LoadState"
import { useContext,useState } from 'react'
import { useDropzone } from 'react-dropzone';


export function DragAndDropContainer({showImg}) {

    const {darkMode}  = useContext(DarkModeContext)
    const { changeLoading }  = useContext(LoadStateContext)

    const [selectedFile, setSelectedFile] = useState(null)

    const onDrop = (acceptedFiles) => {
      changeLoading(true)
      const file = acceptedFiles[0]
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreviewSrc(reader.result)
        showImg(reader.result)
        changeLoading(false)
      }
      reader.readAsDataURL(file)
    }

    const { getRootProps, getInputProps } = useDropzone({ onDrop })
    
    return (
        <section 
          className={`${darkMode ? 'bg-[#212936]': 'bg-[#F9FAFBCC] shadow-xl' } rounded-md p-[8px] w-[540px]  mx-auto my-auto`}
          {...getRootProps()}  
        >
        <input {...getInputProps()}/>
            <div 
                className={`rounded-md border-2 ${darkMode ? 'border-[#4D5562]': 'border-[#E5E7EB]'} 
                border-dashed py-[112px] w-full`}
            >
                <div className="flex flex-col items-center">
                    <img className='size-[30px] mb-[20px]' src={arrowImg}></img>
                    <span className='text-[14px] font-medium  mb-[8px]'>Drag & drop a file or <span className='font-light text-[#3662E3]'>browse files</span></span>
                    <span className='text-[14px] font-light'>JPG, PNG or GIF - Max file size 2MB</span>
                </div>
            </div>
        </section>
    )
}