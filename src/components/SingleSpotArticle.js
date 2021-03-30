import React, { useState } from 'react';
import styled from 'styled-components';

const SingleSpotArticle = ({ prop }) => {
  const { info } = prop;
  const [isShowed, setIsShowed] = useState(false);

  return (
    <Wrapper>
      {isShowed ? (
        <div className='article'>
          <p>{info}</p>
          <button onClick={() => setIsShowed(false)}>show less</button>
        </div>
      ) : (
        <div className='article'>
          <p>{`${info.slice(0, 150)}...`}</p>
          <button onClick={() => setIsShowed(true)}>show more</button>
        </div>
      )}
      <button className='btn btn--blue btn--animated'>view forecast</button>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  .article {
    position: relative;

    p {
      color: var(--color-grey-dark-1);
      font-size: 1.5rem;
    }

    button {
      border: none;
      cursor: pointer;
      background-color: var(--color-white);
      color: var(--color-primary-dark);
      text-transform: uppercase;

      position: absolute;
      bottom: 0;
      right: 0;
      transform: translate(-50%, -50%);
    }
  }
`;

export default SingleSpotArticle;
