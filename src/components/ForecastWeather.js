import React from 'react';
import styled from 'styled-components';
import { convertToWeatherIcon } from '../utils/helpers';

const ForecastWeather = ({ props }) => {
  const { weatherDesc, tempC } = props;

  return (
    <Wrapper>
      <span className='icon'>{convertToWeatherIcon(weatherDesc[0].value)}</span>
      <span>{tempC}&#8451;</span>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    color: var(--color-primary-dark);
  }
`;

export default ForecastWeather;
