import React from 'react';
import { connect } from 'react-redux'
// actions
import { pay } from '../../actions/stripe';
// npm
import StripeCheckout from 'react-stripe-checkout';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';


const Stripe = ({ price }) => {
  const stripePrice = price * 100;
  const publishableKey = 'pk_test_MYtc1Y9o2kastiaotdprXIpM00kcIqDurv';
  // const publishableKey = process.env.STRIPE_PUBLISHABLE_KEY;

  const onToken = token => {
    // console.log(token);
    pay(token)
    // axios({
    //   data: {
    //     amount: stripePrice,
    //     token
    //   },
    //   url: 'stripe',
    //   method: 'post'
    // }).then(res => {
    //   pay();
    //   alert('Payment successful');
    // }).catch(err => {
    //   console.log(err);
    //   alert('Payment error')
    // })
    console.log('ontoken')
  }

  return (
    <StripeCheckout
      amount={stripePrice}
      billingAddress
      bitcoin
      description={`Your total is ${'$' + price}`}
      image="https://www.vidhub.co/assets/logos/vidhub-icon-2e5c629f64ced5598a56387d4e3d0c7c.png"
      label='Pay with Stripe'
      name="Mike's CBD"
      shippingAddress
      panelLabel='Pay with Stripe'
      token={token => onToken(token)}
      stripeKey={publishableKey}
    />
  )
}

const mapStateToProps = state => ({
  stripe: state.stripe
})

export default connect(mapStateToProps, { pay })(Stripe);