import NavBar from "./components/Navbar/Navbar";
import { Home, Landing, Detail, Form} from "./views";
import {  Route, Routes, useLocation } from "react-router-dom";


function App() {
 const location = useLocation();
 

  return (
    <>
    {location.pathname !== "/" && <NavBar/>}
    
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
