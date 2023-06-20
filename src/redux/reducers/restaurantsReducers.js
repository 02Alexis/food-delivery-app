import { restaurantsTypes } from "../types/userTypes";

const initialState = {
  restaurants: [],
};

export const restaurantsReducer = (state = initialState, action) => {
  switch (action.type) {
    case restaurantsTypes.RESTAURANT_GET:
      return {
        ...state,
        restaurants: action.payload.restaurants,
      };
    case restaurantsTypes.RESTAURANT_ADD:
      return {
        ...state,
        restaurants: [...state.restaurants, action.payload],
      };
    case restaurantsTypes.RESTAURANT_FILTERED:
      return {
        ...state,
        restaurants: action.payload.restaurants,
      };
    default:
      return state;
  }
};