import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header({title,setDisplay})
{
    return(
        <Navbar expand="lg" className="navbar navbar-expand-lg navbar-dark">
        <Container>
          <Navbar.Brand href="#">{title}</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link href="#" onClick={(e)=>(setDisplay('add'))} className=''>Add Task</Nav.Link>   
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}

export default Header