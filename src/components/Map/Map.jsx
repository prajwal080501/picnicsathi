<<<<<<< HEAD
import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import Rating from "@material-ui/lab/Rating";
import useStyles from "./Styles";
import LocationOnIcon from "@material-ui/icons/LocationOn";


const Map = ({ setCoordinates, setBounds, coordinates ,places }) => {
  const classes = useStyles();
  const isDesktop = useMediaQuery("(min-width:768px)");
  return (
    <div>
      <div className={classes.mapContainer}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCjaF_5vw1eGHHVZF33ecZK-QmX4h13_6w" }}
          defaultCenter={coordinates}
          center={coordinates}
          defaultZoom={14}
          margin={[50, 50, 50, 50]}
          options={""}
          onChange={(e) => {
            console.log(e);
            setCoordinates({ lat: e.center.lat, lng: e.center.lng });
            setBounds({ne: e.marginBounds.ne, sw: e.marginBounds.sw})
          }}
          onChildClick={""}
        >{places?.map((place, i) => (
          <div className={classes.markerContainer} lat={Number(place.latitude)} lng={Number(place.longitude)} key={i}>
            {
              !isDesktop ? (
                <LocationOnIcon  color="primary"fontSize="small"/>
              ) : (
                  <Paper elevation={3} className={classes.paper}>
                    <Typography className={classes.typography} variant="subtitle2" gutterBottom>
                    {place.name} 
                    </Typography>
                    <img src={place.photo
                      ? place.photo.images.large.url
                      : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"} alt={place.name} className={classes.pointer} />
                    <Rating size="small" value={Number(place.rating)} readOnly/>
                  </Paper>
              )
            }
          </div>
        ))}</GoogleMapReact>
      </div>
    </div>
  );
};

export default Map;
=======
import React from 'react'
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import Rating from "@material-ui/lab";
import useStyles from "./Styles";

const Map = () => {
    const classes = useStyles();
    const isMobile = useMediaQuery('(min-width:600px)');
    const Coordinates = { lat: 0, lng: 0, };
    return (
        <div>
            <div className={classes.mapContainer}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyCjaF_5vw1eGHHVZF33ecZK-QmX4h13_6w' }}
                    defaultCenter={Coordinates}
                    center={Coordinates}
                    defaultZoom={14}
                    margin={[50, 50, 50, 50]}
                    options={ ''}
                    onChange={ ''}
                    onChildClick={ ''}  
                ></GoogleMapReact>
            </div>
        </div>
    )
}

export default Map
>>>>>>> da1d17a1ff0a006fe4fc716c7f2740a10e14dc52
