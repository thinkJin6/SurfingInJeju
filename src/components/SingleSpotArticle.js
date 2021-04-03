import React, { useState } from 'react';
import styled from 'styled-components';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

import { useSpotContext } from '../contexts/spot_context';

const SingleSpotArticle = ({ spot }) => {
  const { info } = spot;
  const [isShowed, setIsShowed] = useState(false);
  const { openModal, setSingleSpot } = useSpotContext();

  return (
    <Wrapper>
      {isShowed ? (
        <div className='article'>
          <p>{info}</p>
          <button onClick={() => setIsShowed(false)}>
            show less&nbsp;
            <FaChevronUp />
          </button>
        </div>
      ) : (
        <div className='article'>
          <p>{`${info.slice(0, 150)}...`}</p>
          <button onClick={() => setIsShowed(true)}>
            show more&nbsp;
            <FaChevronDown />
          </button>
        </div>
      )}
      <button
        className='btn btn--blue btn--animated'
        onClick={() => {
          openModal();
          setSingleSpot(spot);
        }}
      >
        view forecast
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  .article {
    p {
      color: var(--color-grey-dark-1);
      font-size: 1.5rem;
    }

    button {
      border: none;
      cursor: pointer;
      background-color: transparent;
      color: var(--color-primary-dark);
      text-transform: uppercase;

      display: flex;
      align-items: center;
      font-size: 1.3rem;
    }

    button:focus {
      outline: none;
    }
  }

  // 700px
  @media only screen and (max-width: 43.75em) {
    align-items: center;

    .article {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;

export default SingleSpotArticle;
