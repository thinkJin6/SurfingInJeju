import React, { useEffect, useContext, useReducer } from 'react';
import reducer from '../reducers/spot_reducer';
import axios from 'axios';

import { baseUrl, spots, errorMsg } from '../utils/config';
import { getCurrentHour } from '../utils/helpers';
import {
  GET_SPOTS_BEJIN,
  GET_SPOTS_SUCCESS,
  GET_SPOTS_ERROR,
  SORT_SPOTS,
  SET_PATH_ID,
} from '../action';

const initialState = {
  isLoading: true,
  isError: false,
  spots_info: [...spots],
  spots_data: [],
  pathId: 0,
  currentHour: getCurrentHour(),
};

const SpotContext = React.createContext();

export const SpotProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchSpotsData = async (url, spot) => {
    try {
      dispatch({ type: GET_SPOTS_BEJIN });

      const res = await axios(url);
      const data = res.data.data.weather;

      if (!data) throw new Error(errorMsg);

      dispatch({
        type: GET_SPOTS_SUCCESS,
        payload: { data, spot },
      });
    } catch (err) {
      dispatch({ type: GET_SPOTS_ERROR });
      console.error(err);
    }
  };

  const sortSpotsById = () => {
    dispatch({ type: SORT_SPOTS, payload: { spots: state.spots_data } });
  };

  const setPathId = (id) => {
    dispatch({ type: SET_PATH_ID, payload: { id } });
  };

  // Get base datas for SpotLists component
  useEffect(() => {
    state.spots_info.map((spot) => {
      const { lat, lng } = spot;

      fetchSpotsData(`${baseUrl}${lat},${lng}`, spot);
    });
  }, []);

  return (
    <SpotContext.Provider value={{ ...state, sortSpotsById, setPathId }}>
      {children}
    </SpotContext.Provider>
  );
};

// Global context
export const useSpotContext = () => useContext(SpotContext);
