import { useContext, useState } from "react"
import { DragAndDropContainer } from "./DragAndDropContainer"
import { UploadSucces } from "./UploadSucces"
import { UploadLoader } from "./UploadLoader"
import { NavBar } from "./NavBar"
import { LoadStateContext } from "../context/LoadState"


export function SimpleImageUploaderApp() {

    const {loading} = useContext(LoadStateContext)

    return(<>
            <div className="w-full h-full flex flex-col">
                <NavBar/>
                {
                    loading === "" ?   
                    <DragAndDropContainer />
                    :  loading === true ?  <UploadLoader/>
                    :  <UploadSucces /> 
                }
            </div>
    </>)
}