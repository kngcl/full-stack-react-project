/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './Login.css';

export default function Login() {
  return (
    <div className="login_form">
      <form className="form-control">
        <h1 className="Form_title">Login Now</h1>
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
            Login
          </button>
        </div>
        <div className="Form-group">
          <p className="link_to_registration_page">Don't have an account?</p>
        </div>
      </form>
    </div>
  );
}
