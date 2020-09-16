import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// style
import './ProfileItem.scss';

const ProfileItem = ({ profile: { user: _id, name, location }}) => {
  return (
    <div className="profile-item">
      <h2>
        <span>Receipt:</span> {_id}</h2><h2><span>Name:</span> {name}</h2><h2><span>Location:</span> {location}
      </h2>
    </div>
  )
}

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired,
}

export default ProfileItem;
