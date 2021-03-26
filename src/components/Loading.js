import React from 'react';
import styled, { keyframes } from 'styled-components';

const Loading = () => {
  return (
    <Wrapper>
      <div className='loading'></div>
    </Wrapper>
  );
};

const spinner = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const Wrapper = styled.section`
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .loading {
    width: 7rem;
    height: 7rem;
    margin: 0 auto;
    border-radius: 50%;
    border: 4px solid #ccc;
    border-top-color: var(--color-primary-light);
    animation: ${spinner} 0.6s linear infinite;
  }
`;

export default Loading;
