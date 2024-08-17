"use client";
import React from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }: any) => <div>{text}</div>;

const SimpleMap = () => {
  const defaultProps = {
    center: {
      lat: 50.4116625634144,
      lng: 80.24347779237415,
    },
    zoom: 14,
  };
  const key: any = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const language: any = "ru";

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "100%", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: key }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={50.4116625634144}
          lng={80.24347779237415}
          text="SNS"
        />
      </GoogleMapReact>
    </div>
  );
};

export default SimpleMap;
