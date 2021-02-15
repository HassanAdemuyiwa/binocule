import React from 'react';
import { Container } from 'react-bootstrap'
import "../styles.css"

function  Layout(props){

return(
    <Container className="layout">
    {props.children}
    </Container>
)

}

export default Layout;