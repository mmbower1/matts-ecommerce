import axios from 'axios';
// import { setAlert } from './alert';
import { SUBSCRIPTION_SUCCESS, SUBSCRIPTION_FAIL } from './types';
import setAuthToken from '../utils/setAuthToken';

// subscribe
export const subscribe = () => async dispatch => {
  // if (localStorage.token) {
  //   setAuthToken(localStorage.token);
  // }
  // try {
  //   const res = await axios.get('https://api.monarchtracker.com/subscribe');
  //   dispatch({
  //     type: USER_LOADED,
  //     payload: res.data,
  //   });
  // } catch (err) {
  //   console.log("loadUser action ERROR: " + err);
  //   dispatch({
  //     type: AUTH_ERROR
  //   })
  // }
}
