import React from 'react';
import styled from 'styled-components';

import { useSpotContext } from '../contexts/spot_context';
import ForecastHeader from './ForecastHeader';
import ForecastMain from './ForecastMain';
import moment from 'moment';

const Forecast = () => {
  const { single_spot } = useSpotContext();

  const { data } = single_spot;

  return (
    <Wrapper>
      {data.map((dayData, index) => {
        // Getting next 7 days, e.g. Wednesday, March 31, 2021 + index days
        const formatDate = moment(dayData.date).format('dddd, MMM D');
        const { astronomy } = dayData;

        return (
          <div key={index}>
            <ForecastHeader formatDate={formatDate} astronomy={astronomy} />
            <ForecastMain dayData={dayData} />
          </div>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;
  overflow: auto;
  color: var(--color-dark);
`;

export default Forecast;
