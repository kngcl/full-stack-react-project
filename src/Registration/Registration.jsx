/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import '../LoginForm/Login.css';

export default function Registration() {
  return (
    <div className="login_form">
      <form className="form-control">
        <h1 className="Form_title">Register Now</h1>
        <div className="Form-group">
          <div className="label_contol">
            <label htmlFor="FirstName">First Name</label>
          </div>
          <div className="input_control">
            <input
              type="text"
              name="FirstName"
              placeholder="Please Enter Your First Name"
            />
          </div>
        </div>
        <div className="Form-group">
          <div className="label_contol">
            <label htmlFor="LastName">Last Name</label>
          </div>
          <div className="input_control">
            <input
              type="text"
              name="LastName"
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
              name="email"
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
              name="number"
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
              name="Password"
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
          <p className="link_to_registration_page">Already have an account?</p>
        </div>
      </form>
    </div>
  );
}
