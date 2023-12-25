
import { Home, Landing, Detail, Form} from "./views";
import {  Route, Routes } from "react-router-dom";
import NavBar from "./components/Navbar/Navbar";

function App() {
//  const location = useLocation();
 

  return (
    <>
    {/* {location.pathname !== "/" && <NavBar/>} */}
    
    <NavBar/>
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
