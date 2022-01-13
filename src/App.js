import React, {useState, useEffect } from "react";
import { CssBaseline, Grid } from "@material-ui/core";

import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";
import PlaceDetails from "./components/PlaceDetails/PlaceDetails";
import { getPlaceData } from "./api/index";

const App = () => {

  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState({ });
  const [autocomplete, setAutocomplete] = useState(null);


  //useeffect

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      setCoordinates({ lat: latitude, lng: longitude });
    }); 
  }, []);



  useEffect(() => {
      getPlaceData(bounds.sw, bounds.ne)  
    .then((data) => {
      console.log(data);
      setPlaces(data);
    })
  }, [coordinates, bounds]);

  const onLoad = (autoC) => setAutocomplete(autoC);

  const onPlaceChanged = () => {
    const lat = autocomplete.getPlace().geometry.location.lat();
    const lng = autocomplete.getPlace().geomty.location.lng();

    setCoordinates({ lat, lng });
  };
  return (
    <div>
      <CssBaseline />
      <Header  onPlaceChanged={onPlaceChanged} onLoad={onLoad} />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List places={places} />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
            places ={places}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
