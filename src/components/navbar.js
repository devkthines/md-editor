import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {BsMarkdown} from 'react-icons/bs'
export default function NavBar(){

    return(
        <>
     <Navbar bg="dark" variant="dark" className='container-fluid'>
        <Container>
        <Navbar.Brand  href="/"><BsMarkdown/></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/edit">Create</Nav.Link>
            <Nav.Link href="/">Example</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav> <h5 className='ml-auto text-white' >MD-Creator.v1.0</h5>
        </Container>
      </Navbar>
        </>
    )
}