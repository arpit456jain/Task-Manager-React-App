import React from "react";
import { Container } from "react-bootstrap";
function Footer(){
    const style = {
    position: 'fixed',
    left: '0',
    bottom: '5vh',
    width: '100%',
    }
    return(
        <>
        <Container className="col-12 text-center text-light footer" style={style}>
            <b>This is made with ❤️ by Arpit Jain <br></br> For Source Code and More Information About this project <a href="https://github.com/arpit456jain/Task-Manager-React-App">click here</a> </b>
        </Container>
        </>
    );
}

export default Footer;