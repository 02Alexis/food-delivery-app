//las funciones reductoras son funciones que se 'exportan' para alimentar o interactuar con el 'store'
//las funciones reductoras reciven dos parametros 'state' and 'action'

import { userTypes } from "../types/userTypes";

const initialValue = {
  user: {},
  error: null,
};

const userReducer = (state = initialValue, action) => {
    //evaluamos el tipo de accion y como se retornara
  switch (action.type) {
    case userTypes.CREATE_USER:

      return {
        ...state,
        user: {
            ...action.payload.user
        },
        error: action.payload.error
      };

      case userTypes.LOGOUT_USER:

        return{
          ...state,
          user: null,
          error: action.payload
        }

        case userTypes.LOGGIN_USER:
          return {
            ...state,
            user: {
              ...action.payload
            }
          }

    default:
      return {
        ...state
      };
  }
};

export default userReducer;
