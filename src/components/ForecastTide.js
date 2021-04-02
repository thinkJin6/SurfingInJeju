import React from 'react';
import styled from 'styled-components';
import { BsArrowUpShort, BsArrowDownShort } from 'react-icons/bs';
import { FaWater } from 'react-icons/fa';

import { get24Hours } from '../utils/helpers';

const ForecastTide = ({ tide }) => {
  const OnTide = () => {
    const { tideTime, tideHeight_mt: tideHeight, tide_type: tideType } = tide;

    return (
      <div className='tide-point'>
        {tideType.toLowerCase() === 'high' ? (
          <div className='tide-high'>
            <BsArrowUpShort />
            <FaWater />
          </div>
        ) : (
          <div>
            <span className='tide-low'>
              <BsArrowDownShort />
            </span>
            <span className='tide-low'>
              <FaWater />
            </span>
          </div>
        )}
        <div className='tide-info'>
          <h5 className='tide-height'>{get24Hours(tideTime)}</h5>
          <h5>{`${tideHeight}m`}</h5>
        </div>
      </div>
    );
  };

  return <Wrapper>{tide ? <OnTide /> : null}</Wrapper>;
};

const Wrapper = styled.div`
  margin-left: -1.5rem;

  .tide-point {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    line-height: 1;

    .tide-high {
      height: 2rem;
      svg {
        color: var(--color-secondary);
        font-size: 2rem;
      }
    }

    .tide-low {
      svg {
        color: var(--color-primary-light);
        font-size: 2rem;
      }
    }

    .tide-info {
      margin-left: 1rem;

      h5 {
        font-size: 1rem;
        font-weight: 400;
      }

      .tide-height {
        font-size: 1.2rem;
      }
    }
  }

  .tide-mid {
  }
`;

export default ForecastTide;
