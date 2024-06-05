import React, { useState } from "react";

const About =(props)=>{
    const {language} =props
    const data= require("./Lang.json")
   const langdata= data.map((data)=>{
    return data[language]
})
   console.log('value',langdata,language)
    return (
  <p>{langdata}</p>
    )
}
export default About