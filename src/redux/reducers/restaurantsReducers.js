import { restaurantsTypes } from "../types/userTypes";

const initialState = {
  restaurants: [],
  searchResults: [],
  selectedRestaurant: {},
  platos: [],
};

export const restaurantsReducer = (state = initialState, action) => {
  switch (action.type) {
    case restaurantsTypes.RESTAURANT_GET:
      return {
        ...state,
        restaurants: action.payload.restaurants,
      };
    case restaurantsTypes.SEARCH_RESTAURANTS:
      return {
        ...state,
        searchResults: action.payload,
      };
    case restaurantsTypes.RESTAURANT_SELECTED:
      return {
        ...state,
        selectedRestaurant: action.payload,
      };
    case restaurantsTypes.GET_RESTAURANT_DISHES:
      return {
        ...state,
        platos: action.payload,
      };

    default:
      return state;
  }
};
