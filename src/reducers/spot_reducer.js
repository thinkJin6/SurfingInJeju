import {
  GET_SPOTS_BEJIN,
  GET_SPOTS_SUCCESS,
  GET_SPOTS_ERROR,
  SORT_SPOTS,
} from '../action';

const spot_reducuer = (state, action) => {
  // Change state to loading
  if (action.type === GET_SPOTS_BEJIN)
    return { ...state, isLoading: true, isError: false };

  // Merge data with spot info
  if (action.type === GET_SPOTS_SUCCESS) {
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
  }
  // Change state to Error
  if (action.type === GET_SPOTS_ERROR) {
    return { ...state, isLoading: false, isError: true };
  }

  if (action.type === SORT_SPOTS) {
    const sortedSpots = action.payload.spots.sort((a, b) => a.id - b.id);

    return { ...state, spots_data: sortedSpots };
  }

  // Throw error if types aren't matched
  throw new Error('Types are not matched');
};

export default spot_reducuer;
