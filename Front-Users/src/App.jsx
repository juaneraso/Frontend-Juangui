import { Home, Landing, Detail, Form} from "./views";
import {  Route, Routes } from "react-router-dom";


function App() {
 

  return (
    <>
    <Routes>
      
     <Route path="/" element={<Landing/>}/>           
     <Route path="/home" element={<Home/>}/>    
     <Route path="/create" element={<Form/>}/>    
     <Route path="/detail" element={<Detail/>}/>    
 

     </Routes>
    
   
    </>
  )
}

export default App
