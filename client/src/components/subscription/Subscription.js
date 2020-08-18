import React, { useState } from 'react';
import { connect } from 'react-redux';
// actions
import { subscribe } from '../../actions/subscription';
// components
// import Button from '../../components/button/Button';
import './Subscription.scss';
// import SubscribeLogo from '../../img/nat-10.jpg';

const Subscription = ({ subscribe }) => {
  const [ formData, setFormData ] = useState({
		name: '',
		email: ''
  });
  const { name, email } = formData;

	const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

	const onSubmit = (e) => {
		e.preventDefault();
		if (subscribe) {
      alert('subscribed!');
			// setAlert(`Welcome`, 'success');
			subscribe(name, email);
		} else {
      // setAlert('Invalid Credentials', 'danger');
      alert('error');
		}
	};

  return (
    <div id="section-book" className="section-book">
      <div className="row">
        <div className="book">
          <div className="book__form">
            <form action="#" className="form" onSubmit={(e) => onSubmit(e)}>
              <div className="u-margin-bottom-medium">
                <h2 className="heading-secondary">
                  Subscribe now!
                </h2>
              </div>
              <div className="form__group">
                <input 
                  type="text" 
                  className="form__input" 
                  placeholder="Full Name"
                  name="name" 
                  value={name}
                  onChange={(e) => onChange(e)}
                  required 
                />
                <label htmlFor="name" className="form__label">Full name</label>
              </div>
              <div className="form__group">
                <input 
                  type="email" 
                  className="form__input" 
                  placeholder="Email"
                  name="email" 
                  value={email}
                  onChange={(e) => onChange(e)} 
                  id="email" 
                  required 
                />
                <label htmlFor="email" className="form__label">Email</label>
              </div>
            </form>
            {/* <Button type="submit"></Button> */}
            <button className="subscribe-button">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  )
};

const mapStateToProps = (state) => ({
  subscribe: state.subscribe
})

export default connect(mapStateToProps, { subscribe })(Subscription);