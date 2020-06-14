import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
// actions
import { setAlert } from '../../actions/alert';
// styles
import { Button, Form, Menu } from 'semantic-ui-react';
import './Edit.styles.scss';

const Edit = ({ isAuthenticated, user }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    password: '',
  });

  const { name, phone, password } = formData;

  const onSubmit = async (e) => {
    e.preventDefault();
    // Check which fields have been updated and then submit only those fields
    let userInfo = {}
    if (name !== ""){
      userInfo.name = name;
    }
    if (phone !== ""){
      userInfo.phoneNumber = phone;
    }
    if (password !== ""){
      userInfo.password = password;
    }

    await axios.put(`register/${user._id}`, userInfo)
    .then(() => {
      setFormData({
        firstName: "",
        email: "",
        phone : "",
        password : "",
      });
      setAlert('Account updated!', 'success');
    })
    .catch(err => {
      console.log(err);
    });
  }

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  // redirect if not logged in
	if (!isAuthenticated) {
		return <Redirect to="/" />;
  }

	return (
    <div>
      <div className='header'>
        <Menu size='massive'>
          <Menu.Item>
          <i class="fas fa-long-arrow-alt-left"></i>&nbsp;
            <Link to="/">Back</Link>
          </Menu.Item>
        </Menu>
      </div>
      <div className="edit-container">
      <h2>Update account for: {user.email} </h2>
        <br />
        <Form id="edit-page" onSubmit={onSubmit}>
          <Form.Group unstackable widths={3}>
            <Form.Input 
              name='name'
              label='Name'
              placeholder='Name'
              type='text'
              onChange={e => {onChange(e)}}
            />
            <Form.Input 
              name='phone'
              label='Phone'
              placeholder='Phone'
              type='text'
              onChange={e => {onChange(e)}}
            />
            <Form.Input 
              name='password'
              label='Password'
              placeholder='Password'
              type='password'
              onChange={e => {onChange(e)}}
            />
          </Form.Group>
          {/* <Form.Checkbox label="I agree to the Terms and Conditions" /> */}
          <br />
          {/* <div className="edit-button">
            <Button type="submit">Submit</Button>
          </div> */}
          <input className="btn-primary" type='submit' value='Submit'></input>
        </Form>
      </div>
    </div>
	);
};

const mapStateToProps = ({ auth: { isAuthenticated, user } }) => ({
  isAuthenticated,
  user
})

Edit.propTypes = {};

export default connect(mapStateToProps, {})(Edit);
