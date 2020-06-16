import axios from 'axios';
// actions
// import { setAlert } from './alert';
// types
import { GET_PROFILE, PROFILE_ERROR } from './types';
// utils
import setAuthToken from '../utils/setAuthToken';

// get current users profile
export const getCurrentProfile = () => async dispatch => {
  try {
    const res = await axios.get('/profile/me');
    dispatch({
      type: GET_PROFILE,
      payload: res.data
    });
  } catch (err) {
    console.log("getCurrentProfile action ERROR: " + err);
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    })
  }
}