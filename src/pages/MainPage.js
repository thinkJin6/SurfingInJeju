import React from 'react';
import styled from 'styled-components';

import { SpotInfo, SpotLists } from '../components';
import { useSpotContext } from '../contexts/spot_context';
import { Loading } from '../components';
import ErrorPage from './ErrorPage';

const MainPage = () => {
  const { isLoading, isError, spots_data, spots_info } = useSpotContext();

  // Return loading till get All datas
  if (isLoading || spots_data.length !== spots_info.length) return <Loading />;
  if (isError) return <ErrorPage />;

  return (
    <Wrapper>
      <SpotLists />
      <SpotInfo />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  height: 91.25vh;
  background-color: var(--color-grey-light-1);
  border-radius: 0.6rem;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);

  display: grid;
  grid-template-columns: 1fr 2fr;
  color: black;
`;

export default MainPage;
