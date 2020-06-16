import React, { Fragment } from 'react';
import spinner from '../../img/rainbow-spinner2.gif';
// import { SpinnerContainer, SpinnerOverlay } from './Spinner.styles.js';

// const Spinner = WrappedComponent => {
//   const WithSpinner = ({ loading, ...props }) => {
//     return loading ? (
//       <SpinnerOverlay>
//         <SpinnerContainer />
//       </SpinnerOverlay>
//     ) : (
//       <WrappedComponent {...props} />
//     ) 
//   }
//   return WithSpinner
// }

const Spinner = () => {
  return (
    <Fragment>
      <img
          src={spinner}
          style={{ width: '200px', margin: 'auto', display: 'block' }}
          alt='Loading...'
      />
    </Fragment>
  )
}

export default Spinner;
