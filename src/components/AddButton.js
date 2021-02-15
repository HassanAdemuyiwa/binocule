import React, { Component } from 'react';
import add from '../icons/add.svg';
import { Button, Row, Container, Col } from 'react-bootstrap';
import icons_gps from '../icons/icons-gps.svg'
import '../styles.css'


class AddButton extends Component{
    constructor(){
        super()
        this.state ={

        }

    }
render(){


    return(


        <Container>
        <Row className="btn-container">
            <Col>
             <Button className="gpsicon">
                    <img width="100%" src={icons_gps} alt="gps"/> 
                </Button>
            
            </Col>
            <Col>
            <Button className="add-btn">
                    <img width="100%" src={add} alt="addButton"/> 
                </Button>
            
            </Col>
        </Row>
       
        </Container>

        
    )

}


}


export default AddButton;