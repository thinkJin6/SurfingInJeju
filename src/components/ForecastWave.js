import React from 'react';
import styled from 'styled-components';
import { FaLocationArrow } from 'react-icons/fa';

import { formatWaveHeight } from '../utils/helpers';
import { ADJUSTED_DEGREE } from '../utils/config';

const ForecastWave = ({ props }) => {
  const { swellDir, swellPeriod, swellHeight } = props;

  return (
    <Wrapper>
      <span className='icon'>
        <FaLocationArrow
          style={{
            transform: `rotate(${+swellDir + ADJUSTED_DEGREE}deg)`,
          }}
        />
      </span>
      <div className='wave-info'>
        <span className='wave-height'>{formatWaveHeight(+swellHeight)}</span>
        <p>{Math.trunc(swellPeriod)}s</p>
      </div>
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

  .wave-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;

    span {
      letter-spacing: 1px;
      width: 3.65rem;
    }

    p {
      line-height: 1;
      font-size: 1rem;
    }
  }
`;

export default ForecastWave;
