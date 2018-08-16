import { GET_ERRORS } from "../actions/types";

const initialState = {
  isAuthenticated: false,
  user: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case :
      return {
        ...state,
        user: action.payload
      };
    default:
      return state;
  }
}
