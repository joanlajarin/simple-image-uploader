import React, { createContext, useContext, useState, useEffect } from 'react'

const PhotoContext = createContext()

function PhotoProvider(props) {

    const [urlPhoto, setUrlPhoto] = useState("")
    
    const changeUrlPhoto = (url) => {
        setUrlPhoto(url)
    }
    return (  
        <PhotoContext.Provider value={{urlPhoto, changeUrlPhoto}}>
            {props.children}
        </PhotoContext.Provider>
    )
}

export {PhotoContext, PhotoProvider}