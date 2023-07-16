import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header({title})
{
    return(
        <Navbar expand="lg" className="bg-dark navbar-dark">
        <Container>
          <Navbar.Brand href="#home">{title}</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link href="/addTask" className=''>Add Task</Nav.Link>   
              <Nav.Link href="/" className='' >All Tasks</Nav.Link>     
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}

export default Header