import React from 'react';
import { connect } from 'react-redux';
import './Homepage.styles.scss';
// compmonents
import Alert from '../../components/alert/Alert';
import Directory from '../../components/directory/Directory';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Spinner from '../../components/spinner/Spinner';

const Homepage = ({ loading }) => {
  return (
    <div>
      <div>
        <Header />
        <Alert />
      </div>
      {loading === true
          ? <Spinner /> : 
        <div className="homepage">
          
          <Directory />
          <Footer />
        </div>
      }
    </div>
  )
}

const mapStateToProps = (state) => ({
  loading: state.auth.loading
})

export default connect(mapStateToProps, { })(Homepage);