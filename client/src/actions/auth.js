import axios from 'axios';
// import { setAlert } from './alert';
import { REGISTER_SUCCESS, REGISTER_FAIL, USER_LOADED, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, CLEAR_PROFILE } from './types';
import setAuthToken from '../utils/setAuthToken';

// load user
export const loadUser = () => async dispatch => {
  console.log("Loading user....")
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const res = await axios.get('https://api.mikes-cbd.us/login');
    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    console.log("loadUser action ERROR: " + err);
    dispatch({
      type: AUTH_ERROR
    })
  }
}

// register user
export const register = ({ name, email, phoneNumber, password, password2 }) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  const body = JSON.stringify({ name, email, phoneNumber, password, password2 })
  try {
    const res = await axios.post('https://api.mikes-cbd.us/register', body, config);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data // jwt token
    });
    dispatch(loadUser());

  } catch (err) {
    // const errors = err.response.data.errors;
    if (err) {
      console.log(err);
    }
    dispatch({
      type: REGISTER_FAIL
    })
  }
}

// login user
export const login = (email, password) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  const body = JSON.stringify({ email, password });
  try {
    const res = await axios.post('/login', body, config);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data // jwt token
    });
    dispatch(loadUser());
    // dispatch(setAlert('Login success', 'success'));

  } catch (err) {
    const errors = err.response;
    if (errors) {
      console.log(errors)
    }
    dispatch({
      type: LOGIN_FAIL
    })
  }
}

// logout / clear profile
export const logout = () => dispatch => {
  dispatch({ type: CLEAR_PROFILE });
  dispatch({ type: LOGOUT });
}