import React from 'react';
import styled from 'styled-components';
import { FaLocationArrow } from 'react-icons/fa';

import { ADJUSTED_DEGREE } from '../utils/config';

const ForecastWind = ({ props }) => {
  const { windDirDegree, windSpeedMiles } = props;

  return (
    <Wrapper>
      <div className='icon'>
        <FaLocationArrow
          style={{
            transform: `rotate(${+windDirDegree + ADJUSTED_DEGREE}deg)`,
          }}
        />
        <span>{windDirDegree}&deg;</span>
      </div>
      <span className='wind-speed'>{windSpeedMiles}mph</span>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .icon {
    align-self: start;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    svg {
      color: var(--color-grey-dark-1);
    }

    span {
      font-size: 0.8rem;
    }
  }

  .wind-speed {
    width: 4rem;
  }
`;

export default ForecastWind;
