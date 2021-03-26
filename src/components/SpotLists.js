import React from 'react';
import styled from 'styled-components';
import { useSpotContext } from '../contexts/spot_context';

const SpotLists = () => {
  const { spots_data } = useSpotContext();

  return <h2>SpotLists</h2>;
};

export default SpotLists;
