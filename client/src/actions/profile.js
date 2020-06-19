import axios from 'axios';
// actions
import { setAlert } from './alert';
// types
import { GET_PROFILE, GET_PROFILES, PROFILE_ERROR, CLEAR_PROFILE } from './types';
// utils
// import setAuthToken from '../utils/setAuthToken';

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
    });
  }
}

// create or update profile
export const createProfile = (formData, history, edit = false) => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    const res = await axios.post('/profile', formData, config);
    dispatch({
      type: GET_PROFILE,
      payload: res.data
    });
    dispatch(setAlert(edit ? 'Profile updated' : 'Profile created'));
    if (!edit) {
      history.push('/') // cant use <Redirect /> so we use history
    }
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
}

// get profile by id
export const getProfileById = (userId) => async dispatch => {
  try {
    const res = await axios.get(`/profile/user/${userId}`);
    dispatch({
      type: GET_PROFILE,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
}

// get all profiles
export const getProfiles = () => async dispatch => {
  dispatch({ type: CLEAR_PROFILE })
  try {
    const res = await axios.get('/profile');
    dispatch({
      type: GET_PROFILES,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
}

// delete account and profile
export const deleteProfile = () => async dispatch => {
  if (window.confirm('Are you sure? This CANNOT be undone!')) {
    try {
      await axios.delete('/profile');
      dispatch({ type: CLEAR_PROFILE });
      dispatch(setAlert('Your account has been permanently deleted'))
    } catch (err) {
      dispatch({
        type: PROFILE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  }
}

// get gh repos
// export const getRepos = (username) => async dispatch => {
//   try {
//     const res = await axios.get(`profile/github/${username}`);
//     dispatch({
//       type: GET_REPOS,
//       payload: res.data
//     });
//   } catch (err) {
//     dispatch({
//       type: PROFILE_ERROR,
//       payload: { msg: err.response.statusText, status: err.response.status }
//     });
//   }
// }

