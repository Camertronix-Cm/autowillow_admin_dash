"use client";

import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import * as React from 'react';
import styles from "../../styles/styles.module.css";
import "leaflet/dist/leaflet.css";

export interface MapcomponentProps {
}

function onMapClick(e: { latlng: string; }) {
    alert("You clicked the map at " + e.latlng);
}

export interface MapcomponentState {
}

export default class Mapcomponent extends React.Component<MapcomponentProps, MapcomponentState> {
    constructor(props: MapcomponentProps) {
        super(props);

        this.state = {
        }
    }

    public render() {
        return (
            <div style={{
                border: '.5px solid gray',
                width: "99%", height: "80vh"
            }}>
                <MapContainer style={{
                    border: '.5px solid red',
                    width: "99%", height: "80vh"
                }} center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[51.505, -0.09]}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                </MapContainer>

            </div>
        );
    }
}
