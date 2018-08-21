import axios from "axios";
import { GET_ERRORS, TRANSFER_DONE } from "./types";

export const transfer = data => dispatch => {
  axios
    .post("/api/users/transfer", data)
    .then(res => {
      dispatch(transferDone(res));
    })
    .catch({
      type: GET_ERRORS,
      payload: err.response.data
    });
};

const transferDone = res => {
  return {
    type: TRANSFER_DONE,
    payload: res
  };
};
