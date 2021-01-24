import React, { useState } from "react";
import ReactMapGL, { Maker }from 'react-map-gl';
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
    <div>
      <ReactMapGL {...viewport} mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      mapStyle= "mapbox://styles/binocule/ckb15bubn1en51iliqpwtmabm"
      onViewportChange= {viewport => { setViewport(viewport);}}>
         makers here
      </ReactMapGL>

    </div>
  );
}

export default App;
