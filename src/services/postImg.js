import { useState, useContext } from "react"
import { LoadStateContext } from "../context/LoadState.jsx"
import { PhotoContext } from "../context/Photo.jsx"
import { toast } from 'sonner'

export function postImg() {

    const { changeLoading } = useContext(LoadStateContext)
    const { changeUrlPhoto } = useContext(PhotoContext)

    const postToDb = (file) => {
        changeLoading(true)
        //const url = 'http://localhost:5000/upload'
        const url = 'https://simple-image-uploader.onrender.com/upload'
        const formData = new FormData()
        formData.append('file', file)
        fetch(url, {
            body: formData,
            method: 'POST'
        })
        .then((response) => response.json())
        .then((data) => {
            console.log('Post successful:', data)
            changeUrlPhoto(data.fileUrl)
            changeLoading(false)
        })
        .catch((error) => {
            changeLoading("")
            console.error('Error uploading the img:', error)
            toast.error('Only JPG, PNG, and GIF! Max size 2MB')
        })
    }

    return { postToDb }
}