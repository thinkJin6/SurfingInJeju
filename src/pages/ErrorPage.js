import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSpotContext } from '../contexts/spot_context';

const ErrorPage = () => {
  const { isError } = useSpotContext();

  // if data is error return data error syntax
  // else if page address is error return error page
  return (
    <Wrapper className='main'>
      {isError ? (
        <section>
          <h1>404</h1>
          <h3>Failed to fetch data, please try again</h3>
          <Link to='/' className='btn btn--white'>
            try again
          </Link>
        </section>
      ) : (
        <section>
          <h1>404</h1>
          <h3>Sorry, the page you tried can not be found</h3>
          <Link to='/' className='btn btn--white'>
            back home
          </Link>
        </section>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  section {
    margin-top: -10rem;
  }

  h1 {
    margin-top: -5rem;
    font-size: 13rem;
  }

  h3 {
    font-size: 3rem;
    margin-bottom: 3rem;
  }
`;

export default ErrorPage;
