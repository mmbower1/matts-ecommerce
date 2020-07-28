import axios from 'axios';
import { STRIPE_SUCCESS, STRIPE_ERROR } from './types';

// pay with stripe
export const pay = ({ token, price }) => async dispatch => {
  const stripePrice = price * 100;
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    const body = JSON.stringify({ token, stripePrice })
    await axios.post('/https://api.monarchtracker.com/stripe', body, config);
    dispatch({
      type: STRIPE_SUCCESS,
      payload: token,
    });
    alert('success pay')

  } catch (err) {
    console.log("stripe action ERROR: " + err);
    dispatch({
      type: STRIPE_ERROR
    })
    alert('error pay')
  }
}