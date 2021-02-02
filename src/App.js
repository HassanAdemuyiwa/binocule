import React, { useState } from "react";
import ReactMapGL, { Maker }from 'react-map-gl';
import { BrowserView, MobileView, isBrowser, isMobile } from "react-device-detect";
import { Form, FormGroup, Input, InputGroup, InputGroupAddon, InputGroupText, Media, Navbar, Container, CardImg,Card }from 'reactstrap';
import time from './icons/Group 13502.svg';
import search from './icons/searching-magnifying-glass.svg';
import slogo from './icons/Group 11652.svg';
// import logo from './logo.svg';
// import './App.css';

// const Map = ReactMapboxGl({
//   accessToken:
//     
// });


function App() {

 const [viewport, setViewport] = React.useState({
    latitude: 6.497892,
    longitude: 3.382923,
    height: '100vh',
    width: '100vw',
    zoom: 10
  });


  return (
    <MobileView>
     
       
    
      <ReactMapGL {...viewport} mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      mapStyle= "mapbox://styles/binocule/ckb15bubn1en51iliqpwtmabm"
      onViewportChange= {viewport => { setViewport(viewport);}}>
      <Container className='themed-container'>
          <Navbar>
            <Card>
            <InputGroup>
            <InputGroupAddon addonType="prepend">
            <img width="100%" src={slogo} alt="slogo" />
            </InputGroupAddon>
            <Input placeholder="Search" />
            <InputGroupAddon addonType="append">
              <img width="100%" src={search} alt="search" />
              <img width="100%" src={time} alt="time" />
  
            </InputGroupAddon>
            </InputGroup>
            </Card>
        </Navbar>

      </Container>  


      </ReactMapGL>

   
    </MobileView>
  );
}

export default App;
