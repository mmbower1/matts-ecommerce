import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
// actions
import { login } from '../../actions/auth';
import { setAlert } from '../../actions/alert';
// components
import './Login.styles.scss';
// semantic
import { Button, Form } from 'semantic-ui-react';

const Login = ({ setAlert, login, isAuthenticated, user }) => {
	const [ formData, setFormData ] = useState({
		email: '',
		password: ''
	});

	const { email, password } = formData;

	const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

	const onSubmit = (e) => {
		e.preventDefault();
		setAlert(`Welcome`, 'success');
		login(email, password);
	};

	// redirect if logged in
	if (isAuthenticated) {
		return <Redirect to="/" />;
	}

	return (
		<div className="login">
			<h2>LOGIN</h2>
			<Form onSubmit={(e) => onSubmit(e)}>
				<Form.Field>
					<label>Email</label>
					<input
						placeholder="Email"
            type="email"
            name="email"
						value={email}
						onChange={(e) => onChange(e)}
						required
					/>
				</Form.Field>
				<Form.Field>
					<label>Password</label>
					<input
						placeholder="Password"
            type="password"
            name="password"
						value={password}
						onChange={(e) => onChange(e)}
						required
					/>
				</Form.Field>
				<Button type="submit">Login</Button>
			</Form>
		</div>
	);
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
}

const mapStateToProps = ({ auth: { isAuthenticated, user }}) => ({
	isAuthenticated,
	user
})

export default connect(mapStateToProps, { 
	login,
	setAlert
})(Login);