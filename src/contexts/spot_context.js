import React, { useEffect, useContext, useReducer } from 'react';
import reducer from '../reducers/spot_reducer';
import axios from 'axios';

import { baseUrl, spots, errorMsg } from '../utils/config';
import { GET_SPOTS_BEJIN, GET_SPOTS_SUCCESS, GET_SPOTS_ERROR } from '../action';

const initialState = {
  isLoading: true,
  isError: false,
  spots_data: [...spots],
  selected_spot: 0,
};

const SpotContext = React.createContext();

export const SpotProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchSpotsData = async (url) => {
    try {
      dispatch({ type: GET_SPOTS_BEJIN });

      const res = await axios(url);
      const data = res.data.data.weather;

      if (!data) throw new Error(errorMsg);

      dispatch({
        type: GET_SPOTS_SUCCESS,
        payload: { data, spots: state.spots_data },
      });
    } catch (err) {
      dispatch({ type: GET_SPOTS_ERROR });
      console.error(err);
    }
  };

  // Get base datas for SpotLists component
  useEffect(() => {
    state.spots_data.map((spot) => {
      const { lat, lng } = spot;

      fetchSpotsData(`${baseUrl}${lat},${lng}`);
    });
  }, []);

  return (
    <SpotContext.Provider value={{ ...state }}>{children}</SpotContext.Provider>
  );
};

// Global context
export const useSpotContext = () => useContext(SpotContext);
