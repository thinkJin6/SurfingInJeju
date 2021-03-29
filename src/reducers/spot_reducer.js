import {
  GET_SPOTS_BEJIN,
  GET_SPOTS_SUCCESS,
  GET_SPOTS_ERROR,
  SORT_SPOTS,
  SET_PATH_ID,
} from '../action';

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

    // Throw error if types aren't matched
    default:
      throw new Error('Types are not matched');
  }

  // // Change state to loading
  // if (action.type === GET_SPOTS_BEJIN)
  //   return { ...state, isLoading: true, isError: false };

  // // Merge data with spot info
  // if (action.type === GET_SPOTS_SUCCESS) {
  //   const newSpots = {
  //     ...action.payload.spot,
  //     data: action.payload.data,
  //   };

  //   return {
  //     ...state,
  //     isLoading: false,
  //     isError: false,
  //     spots_data: [...state.spots_data, newSpots],
  //   };
  // }
  // // Change state to Error
  // if (action.type === GET_SPOTS_ERROR) {
  //   return { ...state, isLoading: false, isError: true };
  // }
  // // Sort spots by id after fetching
  // if (action.type === SORT_SPOTS) {
  //   const sortedSpots = action.payload.spots.sort((a, b) => a.id - b.id);

  //   return { ...state, spots_data: sortedSpots };
  // }
  // // focus list to give an animation effect
  // if (action.type === SET_FOCUS) {
  //   const newData = state.spots_data.map((spot) => {
  //     if (spot.id !== action.payload.id) return { ...spot, isSelected: false };

  //     return { ...spot, isSelected: true };
  //   });

  //   return { ...state, spots_data: newData };
  // }

  // // Throw error if types aren't matched
  // throw new Error('Types are not matched');
};

export default spot_reducuer;
