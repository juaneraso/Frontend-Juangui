// import { Home, Landing, Detail, Form} from "./views";

import { Route, Routes, useLocation } from "react-router-dom";
import NavBar from "./components/Navbar/Navbar";
import Home from "./views/Home/Home";
import Landing from "./views/Landing/Landing";
import Detail from "./views/Detail/Detail";
import Form from "./views/Form/Form";
import ScrollComponent from "./views/Landing/Landing";
import FormDos from "./views/Form/Form";

function App() {
  const location = useLocation();


  return (
    <>
      {location.pathname !== "/" && <NavBar />}

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/create" element={<FormDos />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </>
  );
}

export default App;
