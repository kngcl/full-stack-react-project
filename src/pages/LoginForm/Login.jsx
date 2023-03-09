/* eslint-disable no-unused-expressions */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../api/auth';
import { saveToken } from '../../utils';

import './Login.css';

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const values = Object.fromEntries(
      new FormData(event.currentTarget).entries()
    );
    try {
      const { data } = await login(values.emailAddress, values.password);
      saveToken(data.token);
      console.log(values.emailAddress, values.password, data.token);
      navigate('/dashboard');
    } catch (e) {
      if (e.response.status === 401) {
        setError('Invalid username or password');
      }
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="login_form">
      <form className="form-control" onSubmit={handleSubmit}>
        <h1 className="Form_title">Login Now</h1>
        {isLoading && <p>Loading...</p>}
        {error && <p className="error">{error}</p>}
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
            Login
          </button>
        </div>
        <div className="Form-group">
          <Link to="/Registration" className="Link_router">
            <p className="link_to_registration_page">Don't have an account?</p>
          </Link>
        </div>
      </form>
    </div>
  );
}
