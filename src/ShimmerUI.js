import React, { useState, useEffect } from 'react';
const ShimmerUI = () => {
 const n=20
    return (
        [...Array(n)].map((e, i) => 
        <div key ={i}style={{ height: "200px", width: '20%', border: '1px solid black' ,margin:10}}>
            <div key={i}style={{ height: "80%", width: "50%",backgroundColor:"lightgrey", margin:5 }}>
            </div>
            </div>
        )
    )

}
export default ShimmerUI
