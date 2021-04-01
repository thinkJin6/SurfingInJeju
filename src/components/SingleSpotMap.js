import React from 'react';
import styled from 'styled-components';
import ReactDOMServer from 'react-dom/server';
import { BiCurrentLocation } from 'react-icons/bi';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import * as L from 'leaflet';

import {
  MAP_ZOOM_LEVEL,
  SCROLL_WHEEL_ZOOM,
  TILE_LAYER_STYLE,
} from '../utils/config';

const SingleSpotMap = ({ prop }) => {
  // Set map and marker position by spot coords
  const { lat, lng } = prop;
  const coords = [lat, lng];

  // Get Icon string from react-dom/server to render leaflet marker as a custom marker
  const icon = L.divIcon({
    className: 'custom-icon',
    html: ReactDOMServer.renderToString(
      <BiCurrentLocation className='marker-circle' />
    ),
  });

  return (
    <Wrapper>
      <MapContainer
        center={coords}
        zoom={MAP_ZOOM_LEVEL}
        scrollWheelZoom={SCROLL_WHEEL_ZOOM}
        className='map'
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url={TILE_LAYER_STYLE}
        />
        <Marker position={coords} icon={icon} />
      </MapContainer>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  height: 100%;
  width: 100%;
  padding-left: 3rem;

  .leaflet-container {
    height: 100%;
    width: 100%;
  }

  .marker-circle {
    color: var(--color-primary-dark);
    font-size: 2.2rem;
  }
`;

export default SingleSpotMap;
