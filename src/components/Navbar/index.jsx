import Container from 'react-bootstrap/Container';
import Navbar  from 'react-bootstrap/Navbar';
import Nav  from 'react-bootstrap/Nav';
import { useSelector } from "react-redux";
import {Link} from "react-router-dom";


function NavContainer() {
const globalAuthVal = useSelector(state => state.auth.valid)
  const globeCartCount = useSelector((state) =>state.cartAmount.cartVal);
  return (
    <Navbar bg=" navbar-dark mb-5 " expand="lg">
      <Container fluid>
        <Navbar.Brand href="#" className='fs-1 fw-bolder'>Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0 text-align-center"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link to = "/" className='text-light text-decoration-none px-2 fs-4'>Home</Link>

            <Link to = "/cart" className='text-light text-decoration-none px-2 fs-4'>cart</Link>
            <span className='text-white'>{globeCartCount}</span>

            <Link to = "/supportUs" className='text-light text-decoration-none px-2 fs-4'>Support Us</Link>
            <Link to = "/Total" className='text-light text-decoration-none px-2 fs-4'>Total Support</Link>
            <Link to = "/register" className='text-light text-decoration-none px-2 fs-4'>{globalAuthVal?'Sign in':'Sign up' }</Link>



          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavContainer;