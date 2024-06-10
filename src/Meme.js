import React, { useState, useEffect } from 'react';
import ShimmerUI from './ShimmerUI';
const Meme = () => {
    const [links, setLinks] = useState([]);
    const [shimerUi, setShimmerUi] = useState(false)

    useEffect(() => {

        memeData()
        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener("scroll", handleScroll)

    }, [])
    const handleScroll = () => {
        const visibleContent = window.scrollY + window.innerHeight >= document.body.scrollHeight
        if (visibleContent) {
            memeData()
        }

    }
    const memeData = async () => {
        setShimmerUi(true)
        const data = await fetch("https://meme-api.com/gimme/20")
        const result = await data.json()
        setShimmerUi(false)
        setLinks((links)=>[...links, ...result.memes])

        console.log('links123', links)
    }


    return (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {links.map((data, i) => (
                    <div key={i} style={{ height: "200px", width: "20%", border: "1px solid black", margin: 10 }}>
                        <img src={data.url} style={{ height: "80%", width: "50%", padding: 5 }} key={i} />
                    </div>

                ))}
                {shimerUi && <ShimmerUI />} 
             
        </div>
    )


}
export default Meme