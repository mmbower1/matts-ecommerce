import React, { Fragment, lazy, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import PrivateRoute from './components/routing/PrivateRoute';
import setAuthToken from './utils/setAuthToken';
// actions
import { loadUser } from './actions/auth';
// containers
// import Homepage from './containers/homepage/Homepage';
// import Auth from './containers/auth/Auth';
// import Checkout from './containers/checkout/Checkout';
// import Edit from './containers/edit/Edit';
// import ShopPage from './containers/shop/Shop';

// components
import ErrorBoundary from './components/error-boundary/ErrorBoundary';
import PrivateRoute from './components/private-route/PrivateRoute';
import ProfileForm from './components/profile-form/ProfileForm';
import Spinner from './components/spinner/Spinner';
// redux
import { store, persistor } from './store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'; // shopping cart data stays
// styles
import { GlobalStyle } from './global.styles.js';
import './App.css'

// react lazy - replaces the imported containers from above
const Homepage = lazy(() => import('./containers/homepage/Homepage'));
const Auth = lazy(() => import('./containers/auth/Auth'));
const Checkout = lazy(() => import('./containers/checkout/Checkout'));
const Edit = lazy(() => import('./containers/edit/Edit'));
const Profile = lazy(() => import('./containers/profile/Profile'));
const ShopPage = lazy(() => import('./containers/shop/Shop'));


if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  // used in functional components, not class based components where componentDidMount() is used instead
  // userSet data keeps reverting back to inital state, check if session token is in localstorage and exists, if not - send back to login. If yes - loadUser(), wait for it to finish to show UI.
  useEffect(() => {
    store.dispatch(loadUser());
  }, [])

  return (
    <Provider store={store}>
      <Router basename={window.location.pathname || ''}>
        <Fragment>
          <PersistGate persistor={persistor}> 
          {/* <Header /> */}
            <GlobalStyle />
            <Switch>
              <ErrorBoundary>
                <Suspense fallback={<Spinner />}>
                  <Route exact path='/' component={Homepage} />
                  <Route path='/auth'component={Auth} />
                  <Route exact path='/checkout' component={Checkout} />
                  <Route exact path='/edit' component={Edit} />
                  <Route exact path='/profile' component={Profile} />
                  <Route path='/shop'component={ShopPage} />
                </Suspense>
              </ErrorBoundary>
            </Switch>
          </PersistGate>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
