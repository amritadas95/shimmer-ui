import logo from './logo.svg';
import './App.css';
import ShimmerUI from './ShimmerUI';
import Meme from './Meme';
import About from './About';
import Team from './Team';
import { BrowserRouter, Route, RouterProvider, Routes, createBrowserRouter} from "react-router-dom"
import ProtectedRoute from './ProtectedRoute';
import Login from './login';
import { useState } from 'react';
import Accordian from "./Accordian"
import ImageSlider from './ImageSlider';
function App() {
 const app= createBrowserRouter([
  {
  path:"/",
  element:<Meme/>

 },
 {
  path:"/about",
  element:<About/>
 }
])
const [lang,setLang]=useState(null)
  return (
    <div >
     <header style={{backgroundColor:"black",width:"100%",height:50, display:"flex", justifyContent:"space-around"}}>
     <a href='/'style={{color:"white",marginTop:20,}}>Meme</a>
     <a href='/about' style={{color:"white",marginTop:20,}}>About</a>
     <a href='/team' style={{color:"white",marginTop:20,}}>Team</a>
     <a href='/accordian' style={{color:"white",marginTop:20,}}>Accordian</a>
     <a href='/imageSlider' style={{color:"white",marginTop:20,}}>ImageSlider</a>
     <select onChange={(e)=>setLang(e.target.value)}>
      <option value ="en">English</option>
      <option value ="od">Odia</option>
      <option value ="hi">Hindi</option>
      <option value ="bn">Kanada</option>
     </select>
     </header>
   <div>
    {console.log('datatesting',lang)}
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Meme/>}></Route>
      <Route element={<ProtectedRoute/>}>
      <Route path="/about" element={<About language={lang}/>}></Route>
      </Route>
      
      <Route path="/team" element={<Team/>}></Route>
      <Route path="/accordian" element={<Accordian/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/imageSlider" element={<ImageSlider/>}></Route>
      
     </Routes>
     </BrowserRouter> 
     </div>
    </div>
   
  );
}

export default App;
