import React, { useEffect } from 'react';
import styled from 'styled-components';

import { SpotInfo, SpotLists } from '../components';
import { useSpotContext } from '../contexts/spot_context';
import { Loading } from '../components';
import ErrorPage from './ErrorPage';

const SingleSpotPage = () => {
  const {
    isLoading,
    isError,
    spots_data,
    spots_info,
    setPathId,
  } = useSpotContext();

  // Set last one letter of location to pathID
  // e.g location(main/2) => 2 = pathId
  useEffect(() => {
    const locationId = +window.location.pathname.slice(-1);

    setPathId(locationId);
  }, [setPathId]);

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
  background-color: var(--color-white);
  border-radius: 0.6rem;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
  /* overflow-y: scroll; */

  display: grid;
  grid-template-columns: 1.2fr 2fr;
  color: black;
`;

export default SingleSpotPage;
