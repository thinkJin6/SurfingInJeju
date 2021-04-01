import React from 'react';
import styled from 'styled-components';

import { useSpotContext } from '../contexts/spot_context';
import SingleSpotTitle from './SingleSpotTitle';
import SingleSpotWeather from './SingleSpotWeather';
import SingleSpotArticle from './SingleSpotArticle';
import SingleSpotMap from './SingleSpotMap';

const SpotDescription = () => {
  const { spots_data, pathId, currentHour } = useSpotContext();
  return (
    <div>
      {spots_data.map((spot) => {
        const { id, data, lat, lng } = spot;
        // Guard clause
        if (id !== pathId) return null;

        const {
          swellHeight_ft: waveHeight,
          windspeedMiles: windSpeedMile,
          winddir16Point: windDirection,
          winddirDegree: windDirDegree,
          tempC,
          waterTemp_C,
          weatherDesc,
        } = data[0].hourly[currentHour];

        return (
          <Wrapper key={id}>
            <SingleSpotTitle
              prop={{ waveHeight, windSpeedMile, windDirection }}
            />
            <SingleSpotWeather
              prop={{
                windSpeedMile,
                tempC,
                waterTemp_C,
                weatherDesc,
                windDirDegree,
              }}
            />
            <SingleSpotArticle spot={spot} />
            <SingleSpotMap prop={{ lat, lng }} />
          </Wrapper>
        );
      })}
    </div>
  );
};

const Wrapper = styled.div`
  height: 55%;
  padding: 4rem;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr, 3fr;
  gap: 3rem;
`;

export default SpotDescription;
