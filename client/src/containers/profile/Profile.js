import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// redux
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// actions
import { getCurrentProfile } from '../../actions/profile';
// components
import Alert from '../../components/alert/Alert';
import Header from '../../components/header/Header';
import EditProfile from '../../components/edit-profile/EditProfile';
import ProfileForm from '../../components/profile-form/ProfileForm';
// semantic
import { Accordion, Icon, Menu } from 'semantic-ui-react';
import './Profile.scss';


const Profile = ({ getCurrentProfile, auth: { user }, profile: { profile, loading }}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    getCurrentProfile();
  }, []);

  const handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const newIndex = activeIndex === index ? -1 : index
    setActiveIndex(newIndex)
  }

  return (
    <div>
      <div className="header">
        <Menu size='massive'>
          <Menu.Item>
          <i className="fas fa-long-arrow-alt-left"></i>&nbsp;
            <Link to="/">Back</Link>
          </Menu.Item>
        </Menu>
      </div>
      <h1>{user.name.charAt(0).toUpperCase() + user.name.slice(1)}'s profile</h1>
      <Alert />
      {profile !== null ? 
        <div className="profile-actions">
          <EditProfile />
        </div> : 
        <div className="no-portfolio">
          You do not have a profile yet!
          {/* <Link to='/create-profile'>Create one</Link> */}
          <Accordion>
            <Accordion.Title
                active={activeIndex === 0}
                index={0}
                onClick={handleClick}
              >
                <Icon name='dropdown' />
                Create One
            </Accordion.Title>
            <Accordion.Content active={activeIndex === -1}>
              <ProfileForm />
            </Accordion.Content>
          </Accordion>
        </div>}
    </div>
  )
}

Profile.propTypes = {
  auth: PropTypes.object.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile })(Profile);
