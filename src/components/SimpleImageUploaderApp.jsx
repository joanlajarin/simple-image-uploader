import { useContext, useState } from "react"
import { DragAndDropContainer } from "./DragAndDropContainer"
import { UploadSucces } from "./UploadSucces"
import { UploadLoader } from "./UploadLoader"
import { NavBar } from "./NavBar"
import { LoadStateContext } from "../context/LoadState"


export function SimpleImageUploaderApp() {

    const {loading} = useContext(LoadStateContext)
    const [imgToShow, setImgToShow] = useState("")
    
    const showImg = (imgRes) => {
        setImgToShow(imgRes)
    }

    return(<>
            <div className="w-full h-full flex flex-col">
                <NavBar/>
                {
                    loading === "" ?   
                    <DragAndDropContainer showImg={showImg}/>
                    :  loading === true ?  <UploadLoader/>
                    :  <UploadSucces imgToShow={imgToShow}/> 
                }
            </div>
    </>)
}