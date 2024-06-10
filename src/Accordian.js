import React, { useState } from "react";

const Accordian =()=>{
    const [expand,setExpand] =useState({id :0, expanded :false})
    const accordianData =[
    {
      title :"Accordian item #1",
      description :"This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow."
    },
    {
        title :"Accordian item #2",
        description:"This is the second item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow."
    },
    {
        title :"Accordian item #3",
        description:"This is the Third item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow."
    }
]
const handleExpandCollapseContent =(event,i,title)=>{
  
   setExpand({id :i, expanded:!expand.expanded})
 

  
}
console.log('exapndd',expand)
    return (
    <div>
        
        {accordianData.map((data,i)=>(      
        <div style={expand.expanded && i == expand.id ?{height:"200px",width:"80%",border:"1px solid black",position:"relative",marginTop:10,marginLeft:10}:{height:42,width:"80%",marginTop:10,marginLeft:10,marginBottom:0,border:"1px solid black"}}key={i}>
     <span style={{display:"flex",justifyContent:"space-between"}}> <span>{data.title}</span>
     <span onClick={(event)=>{handleExpandCollapseContent(event,i,data.title)}}>
      <img src= {expand.expanded && i == expand.id?
        "https://icons.veryicon.com/png/o/miscellaneous/simple-and-round-line-mark/up-arrow-50.png":"https://icons.veryicon.com/png/o/miscellaneous/simple-and-round-line-mark/down-arrow-56.png" } style={{height:30,width:30}} key={i}/>
     </span>
     </span>
     <hr/>
     {expand.expanded && i == expand.id &&
     <p>{data.description}</p>}
     </div>))}
 </div>
 )
}
export default Accordian