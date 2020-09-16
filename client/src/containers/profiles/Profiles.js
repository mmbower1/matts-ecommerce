import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// actions
import { getProfiles } from '../../actions/profile';
// components
import ProfileItem from '../../components/profile-item/ProfileItem';
import Spinner from '../../components/spinner/Spinner';
// semantic
import { Menu } from 'semantic-ui-react';
import './Profiles.scss';

const Profiles = ({ getProfiles, profile: { profiles, loading }}) => {
  useEffect(() => {
    getProfiles();
  }, [getProfiles]) // runs once so use empty brackets

  return (
    <Fragment>
      <Menu size='massive'>
        <Menu.Item>
        <i className="fas fa-long-arrow-alt-left"></i>&nbsp;
          <Link to="/">Back</Link>
        </Menu.Item>
      </Menu>
      {loading ? <Spinner /> : <Fragment>
        <h1>Recent buyers</h1>
        <div className="profiles">
          {profiles.length > 0 ? (
            profiles.map(profile => (
              <ProfileItem key={profile._id} profile={profile} />              
            ))
          ) : <h4>No buyers found!</h4> }
        </div>
        </Fragment>}
    </Fragment>
  )
}

Profiles.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(mapStateToProps, { getProfiles })(Profiles)
