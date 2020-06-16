import React, { Fragment, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
// actions
import { createProfile, deleteProfile, getCurrentProfile } from '../../actions/profile';
// semantic
import { Button, Form } from 'semantic-ui-react';
import './EditProfile.scss';

const EditProfile = ({ profile: { profile, loading }, createProfile, deleteProfile, getCurrentProfile, history }) => {
  const [formData, setFormData] = useState({
    company: '',
    website: '',
    location: '', 
    bio: '',
    status: '',
    githubusername: '',
    skills: '',
    youtube: '',
    facebook: '',
    twitter: '',
    instagram: '',
    linkedin: '',
  });
  const [displaySocials, toggleSocials] = useState(false);

  const { 
    company,
    website,
    location,
    bio,
    status,
    githubusername,
    skills,
    youtube,
    facebook,
    twitter,
    instagram,
    linkedin
  } = formData

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

	const onSubmit = async (e) => {
		e.preventDefault();
    createProfile(formData, history, true)
  };
  
  useEffect(() => {
    getCurrentProfile();
    setFormData({
      company: loading || !profile.company ? '' : profile.company,
      website: loading || !profile.website ? '' : profile.website,
      location: loading || !profile.location ? '' : profile.location,
      status: loading || !profile.status ? '' : profile.status,
      skills: loading || !profile.skills ? '' : profile.skills.join(','),
      githubusername: loading || !profile.githubusername ? '' : profile.githubusername,
      bio: loading || !profile.bio ? '' : profile.bio,
      twitter: loading || !profile.twitter ? '' : profile.twitter,
      facebook: loading || !profile.facebook ? '' : profile.facebook,
      linkedin: loading || !profile.linkedin ? '' : profile.linkedin,
      youtube: loading || !profile.youtube ? '' : profile.youtube,
      instagram: loading || !profile.instagram ? '' : profile.instagram
    })
  }, [loading])// run when loading

  return (
    <div className='profile-form-container'>
      <small>* = required field</small>
        <Form onSubmit={(e) => onSubmit(e)}>
          <Form.Field>
            <select name="status" value={status} onChange={e => onChange(e)}>
              <option value="0">* Select Professional Status</option>
              <option value="Developer">Developer</option>
              <option value="Junior Developer">Junior Developer</option>
              <option value="Senior Developer">Senior Developer</option>
              <option value="Manager">Manager</option>
              <option value="Student or Learning">Student or Learning</option>
              <option value="Instructor">Instructor or Teacher</option>
              <option value="Intern">Intern</option>
              <option value="Other">Other</option>
            </select>
            <small className="form-text">Give us an idea of where you are at in your career</small>
          </Form.Field>
          <Form.Field>
            <input 
              placeholder="Company"
              type="text"
              name="company"
              onChange={(e) => onChange(e)}
              value={company}
            />
            <small className="form-text"
              >Could be your own company or one you work for</small>
          </Form.Field>
          <Form.Field>
            <input
                placeholder="Website"
                type="text"
                name="website"
                onChange={(e) => onChange(e)}
                value={website}
            />
            <small className="form-text"
              >Could be your own or a company website</small>
          </Form.Field>
          <Form.Field>
            <input
              placeholder="Location"
              type="text"
              name="location"
              onChange={(e) => onChange(e)}
              value={location}
            />
            <small className="form-text">City and state suggested (eg. San Francisco, CA)</small>
          </Form.Field>
          <Form.Field>
            <input
              placeholder="Skills"
              type="text"
              name="skills"
              onChange={(e) => onChange(e)}
              value={skills}
              // required
            />
            <small className="form-text">Please use comma separated values (eg.
              HTML,CSS,JavaScript,PHP)</small>
          </Form.Field>
          <Form.Field>
            <input
              type="text"
              placeholder="Github Username"
              name="githubusername"
              onChange={(e) => onChange(e)}
              value={githubusername}
            />
            <small className="form-text">If you want your latest repos and a Github link, include your
              username</small>
          </Form.Field>

          <div className="my-2">
            <button type="button" className="btn btn-light" onClick={() => toggleSocials(!displaySocials)}>
              Add Social Network Links
            </button>
            <span>&nbsp;(Optional)</span>
          </div>
          <br />
          {displaySocials && <Fragment>
            <div className="form-group social-input">
              <i className="fab fa-twitter fa-2x"></i>
              <input 
                type="text"
                placeholder="Twitter"
                name="twitter"
                onChange={(e) => onChange(e)}
                value={twitter}
              />
            </div>
            <div className="form-group social-input">
              <i className="fab fa-facebook fa-2x"></i>
              <input
                type="text"
                placeholder="Facebook"
                name="facebook"
                onChange={(e) => onChange(e)}
                value={facebook}
              />
            </div>
            <div className="form-group social-input">
              <i className="fab fa-youtube fa-2x"></i>
              <input
                type="text"
                placeholder="Youtube"
                name="youtube"
                onChange={(e) => onChange(e)}
                value={youtube}
              />
            </div>
            <div className="form-group social-input">
              <i className="fab fa-linkedin fa-2x"></i>
              <input
                type="text"
                placeholder="Linkedin"
                name="linkedin"
                onChange={(e) => onChange(e)}
                value={linkedin}
              />
            </div>
            <div className="form-group social-input">
              <i className="fab fa-instagram fa-2x"></i>
              <input
                type="text"
                placeholder="Instagram"
                name="instagram"
                onChange={(e) => onChange(e)}
                value={instagram}
              />
            </div>
            <br />
            </Fragment>
          }
          <Button inverted color='primary' className="checkout-button" onClick={() => console.log('submit')}>
              Submit
          </Button>
          <br />
          <br />
          <button onClick={() => deleteProfile()}>
            Delete
          </button>
        </Form>
      </div>
  )
}

EditProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  deleteProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  profile: state.profile
})

// withRouter allows history prop access
export default connect(mapStateToProps, { 
  createProfile, deleteProfile, getCurrentProfile
})(withRouter(EditProfile));

