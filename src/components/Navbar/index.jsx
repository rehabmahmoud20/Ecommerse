import Container from 'react-bootstrap/Container';
import Navbar  from 'react-bootstrap/Navbar';
import Nav  from 'react-bootstrap/Nav';
import {Link} from "react-router-dom";

function NavContainer(props) {
  console.log(props)
  return (
    <Navbar bg="dark navbar-dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link to = "/" className='text-light text-decoration-none px-2'>Home</Link>

            <Link to = "/cart" className='text-light text-decoration-none px-2'>Cart</Link>
            <span className='text-white'>{props.amount}</span>

          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavContainer;