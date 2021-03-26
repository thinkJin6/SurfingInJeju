import { GET_SPOTS_BEJIN, GET_SPOTS_SUCCESS, GET_SPOTS_ERROR } from '../action';

const spot_reducuer = (state, action) => {
  // Change state to loading
  if (action.type === GET_SPOTS_BEJIN) return { ...state, isLoading: true };

  // Combine local data with API data
  if (action.type === GET_SPOTS_SUCCESS) {
    const newSpotsData = action.payload.spots.map((spot) => {
      return { ...spot, data: action.payload.data };
    });

    return { ...state, isLoading: false, spots_data: newSpotsData };
  }
  // Change state to Error
  if (action.type === GET_SPOTS_ERROR) {
    return { ...state, isLoading: false, isError: true };
  }

  // Throw error if types aren't matched
  throw new Error('Types are not matched');
};

export default spot_reducuer;
