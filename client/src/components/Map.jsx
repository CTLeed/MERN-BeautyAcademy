import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { useRef, useState, useEffect, React } from "react";
import { useJsApiLoader, GoogleMap, Marker, LoadScript } from "@react-google-maps/api";
import Box from "@mui/material/Box";
import CircularIndeterminate from "./Spinner";

// <Wrapper apiKey={"AIzaSyB3tCuOcUt5xhyvvDt5ZzjZZT53mixSL2o"} render={render}>

const MapContainer = () => {

  const locations = [
    {
      name: "Location 1",
      location: {
        lat: 47.99452586494551,
        lng: -122.19456807301113
      }
    }
  ]

  const mapStyles = {
    height: "100%",
    width: "100%",
    border: "black",
    marginLeft: "1.3rem",
    marginTop: "1rem"
  };

  const defaultCenter = {
    lat: 47.99452586494551, lng: -122.19456807301113
  }

  return (
    <LoadScript
      googleMapsApiKey={insertGoogleMapAPIKey}>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={13}
        center={defaultCenter}>
        {
          locations.map(item => {
            return (
              <Marker key={item.name} position={item.location} />
            )
          })
        }
      </GoogleMap>
    </LoadScript>
  )
}

export default MapContainer;


const center = { lat: 47.99452586494551, lng: -122.19456807301113 };


