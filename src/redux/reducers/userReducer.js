import { GET_USER } from "../types";

const initialState = {
  user: {},
  loading: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      console.log(action.payload.length);
      return {
        ...state,
        user: action.payload.length === 1 ? action.payload[0] : {},
      };
    default:
      return state;
  }
};
