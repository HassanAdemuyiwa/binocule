import React from "react";
import ReactMapGL from "react-map-gl";
import { MobileView } from "react-device-detect";
import { ThemeProvider } from '@material-ui/styles'
import theme from './components/Theme';
import Header from './components/Header';
import ActionButtons from "./components/ActionButtons";


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
      <ThemeProvider theme={theme}>
         
          <Header/>
          <ActionButtons />

      </ThemeProvider>
      

      </ReactMapGL>
    </MobileView>
  );
}

export default App;
