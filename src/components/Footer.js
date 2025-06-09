import { Container } from "react-bootstrap";
function Footer({display}){
     const footerStyle = {
    position: display == null ? 'fixed' : 'static',
    left: 0,
    bottom: '0vh',
    width: '100%',
    color: 'white',
    textAlign: 'center',
    padding: '1rem 0',
  };
    return(
        <>
        <Container fluid style={footerStyle}>
            <b>This is made with ❤️ by Arpit Jain <br></br> For Source Code and More Information About this project <a href="https://github.com/arpit456jain/Task-Manager-React-App">click here</a> </b>
        </Container>
        </>
    );
}

export default Footer;