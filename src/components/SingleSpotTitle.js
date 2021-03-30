import React from 'react';
import styled from 'styled-components';

import { formatWaveHeight, formatWindDescription } from '../utils/helpers';
import Stars from './Stars';

const SingleSpotTitle = ({ prop }) => {
  const { waveHeight, windSpeedMile, windDirection } = prop;

  return (
    <Wrapper>
      <h2>{formatWaveHeight(waveHeight)}</h2>
      <Stars prop={{ waveHeight, windSpeedMile, small: false }} />
      <h4>{formatWindDescription(windSpeedMile, windDirection)}</h4>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  display: grid;
  grid-template-columns: [wind-start] 1fr [stars-start] 1fr 1fr [stars-end] 1fr [wind-end];
  grid-template-rows: repeat(2, 1fr);
  gap: 3px;
  align-items: center;
  line-height: 1.2;

  h2 {
    font-size: 2.5rem;
    letter-spacing: 0.2rem;
  }

  h4 {
    grid-column-start: wind-start;
    grid-column-end: wind-end;
    align-self: start;

    color: var(--color-grey-dark-1);
    font-size: 1.5rem;
    font-weight: 300;
    text-transform: uppercase;
  }
`;

export default SingleSpotTitle;
