import React, { createContext, useContext, useState, useEffect } from 'react'

const LoadStateContext = createContext()

function LoadStateProvider(props) { 
    const [loading, setLoading] = useState("")

    const changeLoading = (value) => {
        setLoading(value)
    }
    
    return (  
        <LoadStateContext.Provider value={{loading, changeLoading}}>
            {props.children}
        </LoadStateContext.Provider>
    )
}

export {LoadStateContext, LoadStateProvider}