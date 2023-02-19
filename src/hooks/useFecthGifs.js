import { useState, useEffect } from "react"
import { getGif } from "../helpers/getGif"


export const useFecthGifs = (category) => {

    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getImages = async () => {
        const imagens = await getGif(category)
        setImages(imagens)
        setIsLoading(false)
    }

    useEffect(() => {
        getImages()
    }, [])


    return {
        images,
        isLoading
    }
}
