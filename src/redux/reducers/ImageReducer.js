import { ADD_IMAGE } from "../types";

const initialState = {
  Image: "",
  loading: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_IMAGE:
      return { ...state, Image: action.payload.filename };
    default:
      return state;
  }
};
