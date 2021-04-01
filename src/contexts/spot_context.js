import React, { useEffect, useContext, useReducer, useCallback } from 'react';
import reducer from '../reducers/spot_reducer';
import axios from 'axios';

import { BASE_URL, SPOTS_LOCAL_DATA, ERROR_MSG } from '../utils/config';
import { getCurrentHour } from '../utils/helpers';
import {
  GET_SPOTS_BEJIN,
  GET_SPOTS_SUCCESS,
  GET_SPOTS_ERROR,
  SORT_SPOTS,
  SET_PATH_ID,
  CLOSE_MODAL,
  OPEN_MODAL,
  SET_SINGLE_SPOT,
} from '../action';

const initialState = {
  isLoading: true,
  isError: false,
  isModalOpen: false,
  spots_info: [...SPOTS_LOCAL_DATA],
  spots_data: [],
  single_spot: null,
  pathId: 0,
  currentHour: getCurrentHour(),
};

const SpotContext = React.createContext();

export const SpotProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchSpotsData = useCallback(async (url, spot) => {
    try {
      dispatch({ type: GET_SPOTS_BEJIN });

      const res = await axios(url);
      const data = res.data.data.weather;

      if (!data) throw new Error(ERROR_MSG);

      dispatch({
        type: GET_SPOTS_SUCCESS,
        payload: { data, spot },
      });
    } catch (err) {
      dispatch({ type: GET_SPOTS_ERROR });
      console.error(err);
    }
  }, []);

  const sortSpotsById = useCallback(() => {
    dispatch({ type: SORT_SPOTS, payload: { spots: state.spots_data } });
  }, [state.spots_data]);

  const setPathId = useCallback((id) => {
    dispatch({ type: SET_PATH_ID, payload: { id } });
  }, []);

  const closeModal = () => {
    dispatch({ type: CLOSE_MODAL });
  };

  const openModal = () => {
    dispatch({ type: OPEN_MODAL });
  };

  const setSingleSpot = (spot) => {
    dispatch({ type: SET_SINGLE_SPOT, payload: { spot } });
  };

  // Get base datas for SpotLists component
  useEffect(() => {
    state.spots_info.map((spot) => {
      const { lat, lng } = spot;

      fetchSpotsData(`${BASE_URL}${lat},${lng}`, spot);

      return null;
    });
  }, [fetchSpotsData, state.spots_info]);

  return (
    <SpotContext.Provider
      value={{
        ...state,
        sortSpotsById,
        setPathId,
        closeModal,
        openModal,
        setSingleSpot,
      }}
    >
      {children}
    </SpotContext.Provider>
  );
};

// Global context
export const useSpotContext = () => useContext(SpotContext);
