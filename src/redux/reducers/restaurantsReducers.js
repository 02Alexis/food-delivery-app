import { platosTypes, restaurantsTypes } from "../types/userTypes";

const initialState = {
  restaurants: [],
  searchResults: [],
  selectedRestaurant: {},
  platos: [],
  platoSeleccionado: [],
  cart: [],
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

    case platosTypes.PLATOS_GET:
      return {
        ...state,
        platoSeleccionado: action.payload,
      };

    case restaurantsTypes.ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case restaurantsTypes.REMOVE_FROM_CART:
      const updatedCart = state.cart.filter(
        (item) => item.id !== action.payload
      );
      return {
        ...state,
        cart: updatedCart,
      };

    default:
      return state;
  }
};
