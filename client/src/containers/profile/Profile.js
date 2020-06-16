import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// redux
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// actions
import { getCurrentProfile } from '../../actions/profile';
// components
import ProfileForm from '../../components/profile-form/ProfileForm';
// semantic
import { Accordion, Icon } from 'semantic-ui-react';


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
      <h1>{user.name}'s profile</h1>
      {profile !== null ? 
        <div>has</div> : 
        <div>
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
