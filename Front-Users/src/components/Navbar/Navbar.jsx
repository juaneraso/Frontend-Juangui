// import {Link} from "react-router-dom";

// const NavBar = () =>{
//   return(

//    <div >
//     <Link to="/home">HOME</Link>
//     <Link to="/create">FORM</Link>

//    </div>
//   )

// }

// export default NavBar;

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavBarDos = () => {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand>CRUD</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/create">Create</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBarDos;
