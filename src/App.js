import React, { useState } from "react";
import ReactMapGL, { Maker } from "react-map-gl";
import { MobileView } from "react-device-detect";
import SearchBar from "./components/SearchBar";
import AddButton from "./components/AddButton";
import Layout from "./components/Layout"

function App() {
  const [viewport, setViewport] = React.useState({
    latitude: 6.497892,
    longitude: 3.382923,
    height: "100vh",
    width: "100vw",
    zoom: 10,
  });

  return (
    <MobileView>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle="mapbox://styles/binocule/ckb15bubn1en51iliqpwtmabm"
        onViewportChange={(viewport) => {
          setViewport(viewport);
        }}
      >
        <Layout>
        <SearchBar />
        <AddButton />
        </Layout>
        
       
      </ReactMapGL>
    </MobileView>
  );
}

export default App;
