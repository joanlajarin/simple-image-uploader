import { useState } from "react";
import { DragAndDropContainer } from "./DragAndDropContainer";
import { NavBar } from "./NavBar";

export function SimpleImageUploaderApp() {

    const [loading, setLoading] = useState("")
    return(<>
            <div className="w-full h-full flex flex-col">
                <NavBar/>
                {
                    loading === "" ?   
                    <DragAndDropContainer/>
                    :  loading === true ?   <span>Loading..</span> :
                    <span>Foto cargada</span>
                }
            </div>
    </>)
}