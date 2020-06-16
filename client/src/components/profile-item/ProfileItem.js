import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// style
import './ProfileItem.scss';

const ProfileItem = ({ profile: { user: { _id, name }, location }}) => {
  return (
    <div className="profile-item">
      <h2>{_id}</h2><h2>{name}</h2><h2>{location}</h2>
    </div>
  )
}

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired,
}

export default ProfileItem
