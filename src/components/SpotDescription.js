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
        const { id, data, info } = spot;
        // Guard clause
        if (id !== pathId) return;
        console.log(data[0].hourly[currentHour]);

        const {
          swellHeight_ft: waveHeight,
          windspeedMiles: windSpeedMile,
          winddir16Point: windDirection,
          winddirDegree: windDirDegree,
          tempC,
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
                weatherDesc,
                windDirDegree,
              }}
            />
            <SingleSpotArticle prop={{ info }} />
            <SingleSpotMap />
          </Wrapper>
        );
      })}
    </div>
  );
};

const Wrapper = styled.div`
  height: 55%;
  padding: 4rem 6rem;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr, 3fr;
  gap: 3rem;
`;

export default SpotDescription;
