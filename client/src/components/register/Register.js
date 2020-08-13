import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button, Divider, Form } from 'semantic-ui-react';
// actions
import { register } from '../../actions/auth';
import { setAlert } from '../../actions/alert';
// components
// import FormInput from '../form-input/FormInput';
import './Register.styles.scss';

const Register = ({ isAuthenticated, register, setAlert }) => {
	const [ formData, setFormData ] = useState({
		name: '',
		email: '',
		phoneNumber: '',
		password: '',
		password2: ''
	});

	const { name, email, phoneNumber, password, password2 } = formData;

	const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

	const onSubmit = async (e) => {
		e.preventDefault();
    if (password !== password2) {
			setAlert('Passwords do not match', 'danger');
			if (!email) {
				setAlert('Invalid credentials', 'danger');
			}
    } else {
      register({ name, email, phoneNumber, password, password2 })
      console.log('REGISTERED')
    }
	};

	// redirect if logged in
	if (isAuthenticated) {
		return <Redirect to="/" />;
	}

	return (
		<div className="register">
			<Divider />
			<br />
			<h2>CREATE ACCOUNT</h2>
			<Form onSubmit={(e) => onSubmit(e)}>
				<Form.Field>
					<label>Name</label>
					<input
						placeholder="Name"
						type="text"
						name="name"
						onChange={(e) => onChange(e)}
						value={name}
						required
					/>
				</Form.Field>
				<Form.Field>
					<label>Email</label>
					<input
						placeholder="Email"
						type="email"
						name="email"
						onChange={(e) => onChange(e)}
						value={email}
						required
					/>
				</Form.Field>
				<Form.Field>
					<label>Phone Number</label>
					<input
						placeholder="Phone"
						type="text"
						name="phoneNumber"
						onChange={(e) => onChange(e)}
						value={phoneNumber}
						required
					/>
				</Form.Field>
				<Form.Field>
					<label>Password</label>
					<input
						placeholder="Password"
						type="password"
						name="password"
						onChange={(e) => onChange(e)}
						value={password}
						required
					/>
				</Form.Field>
				<Form.Field>
					<label>Confirm Password</label>
					<input
						placeholder="Confirm Password"
						type="password"
						name="password2"
						onChange={(e) => onChange(e)}
						value={password2}
						required
					/>
				</Form.Field>
				<Button type="submit">Register</Button>
			</Form>
		</div>
	);
};

Register.propTypes = {
	isAuthenticated: PropTypes.bool,
	register: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { 
	register,
	setAlert
})(Register);