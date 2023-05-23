import { ADD_IMAGE, ADD_IMAGE_ERROR } from "../types";
import axios from "axios";

export const addImage = (Image) => async (dispatch) => {
  try {
    const formData = new FormData();
    formData.append("image", Image);

    const res = await axios.post("http://localhost:3004/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    dispatch({
      type: ADD_IMAGE,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: ADD_IMAGE_ERROR,
      payload: console.log(e),
    });
  }
};
