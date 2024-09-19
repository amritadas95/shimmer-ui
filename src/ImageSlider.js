import React, { useEffect, useState } from "react"

const ImageSlider = () => {
    const [slider, setSlider] = useState(0)
    const images = ["https://picsum.photos/800/400?random=1", "https://picsum.photos/800/400?random=2", "https://picsum.photos/800/400?random=1", "https://picsum.photos/800/400?random=2"]
    const handlePreviousImage = () => {
        setSlider((slider) => (slider - 1 < 0 ? images.length - 1 : slider - 1))
    }
    const handleNextImage = () => {
        setSlider((slider) => slider + 1 === images.length ? 0 : slider + 1)
    }
    useEffect(() => {
        const timerId = setInterval(() => handleNextImage(), 2000)
        return () => {
            clearInterval(timerId)
        }
    }, [slider])
    console.log('slider', slider)
    return (
        <div>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <img src="https://icons.veryicon.com/png/o/application/skydrive-cloud-disk/previous-step-8.png" height="90px" width="80px" onClick={handlePreviousImage} />

                <img src={images[slider]} width="50%" height="300px" style={{ alignContent: "center" }} />
                <img src="https://icons.veryicon.com/png/o/miscellaneous/linear-general-icon-library/next-page-43.png" height="90px" width="80px" onClick={handleNextImage} />
            </div>

        </div>
    )
}
export default ImageSlider