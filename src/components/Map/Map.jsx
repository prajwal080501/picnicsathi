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
