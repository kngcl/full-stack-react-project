/* eslint-disable no-restricted-globals */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { register } from '../../api/auth';
import '../LoginForm/Login.css';

export default function Registration() {
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const values = Object.fromEntries(data.entries());
    await register(values);
    console.log(values);
    navigate('/');
  };
  return (
    <div className="login_form">
      <form className="form-control" onSubmit={handleSubmit}>
        <h1 className="Form_title">Register Now</h1>
        <div className="Form-group">
          <div className="label_contol">
            <label htmlFor="FirstName">First Name</label>
          </div>
          <div className="input_control">
            <input
              type="text"
              name="firstName"
              placeholder="Please Enter Your First Name"
            />
          </div>
        </div>
        <div className="Form-group">
          <div className="label_contol">
            <label htmlFor="lastName">Last Name</label>
          </div>
          <div className="input_control">
            <input
              type="text"
              name="lastName"
              placeholder="Please Enter Your LastName"
            />
          </div>
        </div>
        <div className="Form-group">
          <div className="label_contol">
            <label htmlFor="email">Email</label>
          </div>
          <div className="input_control">
            <input
              type="email"
              name="emailAddress"
              placeholder="Please Enter Your email"
            />
          </div>
        </div>
        <div className="Form-group">
          <div className="label_contol">
            <label htmlFor="Phone">Phone</label>
          </div>
          <div className="input_control">
            <input
              type="number"
              name="phone"
              placeholder="Please Enter Your Phone"
            />
          </div>
        </div>
        <div className="Form-group">
          <div className="label_contol">
            <label htmlFor="Password">Password</label>
          </div>
          <div className="input_control">
            <input
              type="password"
              name="password"
              placeholder="Please Enter Your password"
            />
          </div>
        </div>
        <div className="Form-group">
          <button type="submit" className="Btn_submit">
            Register
          </button>
        </div>
        <div className="Form-group">
          <Link to="/" className="Link_router">
            <p className="link_to_registration_page">
              Already have an account?
            </p>
          </Link>
        </div>
      </form>
    </div>
  );
}
