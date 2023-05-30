import { GET_USER, GET_USER_ERROR } from "../types";
import axios from "axios";

export const getUser = (user) => async (dispatch) => {
  try {
    const res = await axios.get(
      `http://localhost:3004/users?username=${user.username}&password=${user.password}`
    );
    dispatch({
      type: GET_USER,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: GET_USER_ERROR,
      payload: console.log(e),
    });
  }
};
