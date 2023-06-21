import { platosTypes } from "../types/userTypes";

export const platosReducer = (state = [], action) => {
  switch (action.type) {
    case platosTypes.PLATOSRESTAURANTE_GET:
      return {
        ...state,
        platos: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
