import React from 'react';
import styled from 'styled-components';

import { formatWaveHeight, formatWindDescription } from '../utils/helpers';
import Stars from './Stars';

const SingleSpotTitle = ({ prop }) => {
  const { waveHeight, windSpeedMile, windDirection } = prop;

  return (
    <Wrapper>
      <div>
        <h2>{formatWaveHeight(waveHeight)}</h2>
        <Stars prop={{ waveHeight, windSpeedMile, small: false }} />
      </div>
      <h4>{formatWindDescription(windSpeedMile, windDirection)}</h4>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    align-items: center;
  }

  h2 {
    font-size: 2.5rem;
    letter-spacing: 0.2rem;
    margin-right: 2rem;
  }

  h4 {
    color: var(--color-grey-dark-1);
    font-size: 1.5rem;
    font-weight: 300;
    text-transform: uppercase;
  }

  // 700px
  @media only screen and (max-width: 43.75em) {
    align-items: center;
    div {
      justify-content: center;
    }
  }
`;

export default SingleSpotTitle;
