import { useState, useContext } from "react"
import { LoadStateContext } from "../context/LoadState.jsx"
import { PhotoContext } from "../context/Photo.jsx"

export function postImg() {

    const { changeLoading } = useContext(LoadStateContext)
    const { changeUrlPhoto } = useContext(PhotoContext)


    function dataURItoBlob(dataURI) {
        var binary = atob(dataURI.split(',')[1]);
        var array = [];
        for(var i = 0; i < binary.length; i++) {
            array.push(binary.charCodeAt(i));
        }
        return new Blob([new Uint8Array(array)], {type: 'image/jpeg'});
    }

    const postToDb = (file) => {
        changeLoading(true)
        const url = 'http://localhost:5000/upload'
        //  const url = 'https://code-sharing-jlr.onrender.com/api/code'
        // Create a FormData object and append the file
        const formData = new FormData()
        const imgSrc = dataURItoBlob(file)
        formData.append('file', imgSrc)
        fetch(url, {
            body: formData,
            method: 'POST'
        })
        .then((response) => response.json())
        .then((data) => {
            console.log('Post successful:', data)
            changeUrlPhoto(data.fileUrl)
        })
        .catch((error) => {
            console.error('Error uploading the img:', error)
        })
        .finally(() => changeLoading(false))
    }

    return { postToDb }
}