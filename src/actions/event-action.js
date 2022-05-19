import Axios from "axios";

const url = `http://localhost:2000/api/events`;

function getEvents(id, body) {
  return async (dispatch) => {
    try {
      console.log(id, body)
      const res = await Axios.post(`${url}/get/${id}`, body);
      dispatch({
        type: "GET_EVENT",
        payload: res.data,
      });
    } catch (e) {
      console.error(e.toString());
    }
  };
}

function postEvent(body) {
  return async (dispatch) => {
    try {
      const res = await Axios.post(`${url}/post`, body);
      dispatch({
        type: "POST_EVENT",
        payload: res.data.results,
      });
    } catch (e) {
      console.error(e.toString());
    }
  };
}

function editEvent(id, body) {
  return async (dispatch) => {
    try {
      console.log(id, body)
      const res = await Axios.patch(`${url}/patch/${id}`, body);
      dispatch({
        type: "EDIT_EVENT",
        payload: res.data.results,
      });
    } catch (e) {
      console.error(e.toString());
    }
  };
}

export const EventAction = { getEvents, editEvent, postEvent };
