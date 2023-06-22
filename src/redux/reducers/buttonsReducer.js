import { buttonsTypes } from "../types/userTypes";

const initialState = {
    buttons: [],
  };

export const buttonsReducer = (state = initialState, action) => {
  switch (action.type) {
    case buttonsTypes.BUTTON__GET:
      return {
        ...state,
        buttons: action.payload.buttons,
      };
      default:
        return state;
    }
};
