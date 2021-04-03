import {
  GET_SPOTS_BEJIN,
  GET_SPOTS_SUCCESS,
  GET_SPOTS_ERROR,
  SORT_SPOTS,
  SET_PATH_ID,
  CLOSE_MODAL,
  OPEN_MODAL,
  SET_SINGLE_SPOT,
} from '../utils/action';

const spot_reducuer = (state, action) => {
  switch (action.type) {
    // Change state to loading
    case GET_SPOTS_BEJIN:
      return { ...state, isLoading: true, isError: false };

    // Merge data with spot info
    case GET_SPOTS_SUCCESS:
      const newSpots = {
        ...action.payload.spot,
        data: action.payload.data,
      };

      return {
        ...state,
        isLoading: false,
        isError: false,
        spots_data: [...state.spots_data, newSpots],
      };

    // Change state to Error
    case GET_SPOTS_ERROR:
      return { ...state, isLoading: false, isError: true };

    // Sort spots by id after fetching
    case SORT_SPOTS:
      const sortedSpots = action.payload.spots.sort((a, b) => a.id - b.id);

      return { ...state, spots_data: sortedSpots };

    // Set path id to give an animation effect on list and to get img & info
    case SET_PATH_ID:
      return { ...state, pathId: action.payload.id };

    case CLOSE_MODAL:
      return { ...state, isModalOpen: false };

    case OPEN_MODAL:
      return { ...state, isModalOpen: true };
    // Set single spot to send data to Forecast component
    case SET_SINGLE_SPOT:
      return { ...state, single_spot: action.payload.spot };

    // Throw error if types aren't matched
    default:
      throw new Error('Types are not matched');
  }
};

export default spot_reducuer;
