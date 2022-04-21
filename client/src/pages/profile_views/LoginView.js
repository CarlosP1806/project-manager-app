import React, { useState, useEffect } from 'react'
import { createUser, loginUser } from '../../utils/auth_api';
import Auth from '../../utils/auth';
import './LoginView.css';

function LoginView() {

  // Determine if login or sign up
  const [inputFromLogin, setInputFromLogin] = useState(true);

  // Form details
  const [loginFormInput, setLoginFormInput] = useState({
    username: "",
    password: ""
  });

  const [signFormInput, setSignFormInput] = useState({
    signUsername: "",
    signEmail: "",
    signPassword: ""
  });

  function handleLoginChange(event) {
    setLoginFormInput(prev => {
      return { ...prev, [event.target.name]: event.target.value };
    });
  }

  function handleSignChange(event) {
    setSignFormInput(prev => {
      return { ...prev, [event.target.name]: event.target.value };
    });
  }

  async function handleSignUp(event) {
    event.preventDefault();
    try {
      const { signUsername, signEmail, signPassword } = signFormInput;
      const response = await createUser(
        { username: signUsername, email: signEmail, password: signPassword });
      if (!response.ok) {
        throw new Error('something went wrong');
      }
      const { token, user } = await response.json();
      console.log(user);
      Auth.login(token);
    } catch (err) {
      console.log(err);
    }
  }

  async function handleLogin(event) {
    event.preventDefault();
    try {
      const response = await loginUser(loginFormInput);
      if(!response.ok) {
        throw new Error('something went wrong');
      }
      const { token, user } = await response.json();
      console.log(user);
      Auth.login(token);
    } catch(err) {
      console.log(err);
    }
  }

  return (
    <>
      <main className="auth-form-view">
        <section className="auth-form-container">
          <header className="auth-form__header">
            <h1 className="auth-form__title">Project Manager App</h1>
            <div className="auth-form__buttons">
              <div
                className={`auth-form__button ${inputFromLogin ? 'active' : ''}`}
                onClick={() => setInputFromLogin(true)}>
                Login
              </div>
              <div
                className={`auth-form__button ${inputFromLogin ? '' : 'active'}`}
                onClick={() => setInputFromLogin(false)}>
                Sign Up
              </div>
            </div>
          </header>
          <div className="auth-form__content">
            {inputFromLogin ? (<>
              <form className="login-form" onSubmit={handleLogin}>
                <div className="form__row">
                  <label className="form__label" htmlFor="username">Username:</label>
                  <input
                    className="form__input"
                    type="text"
                    id="username"
                    name="username"
                    onChange={handleLoginChange}
                    value={loginFormInput.username} />
                </div>
                <div className="form__row">
                  <label className="form__label" htmlFor="password">Password:</label>
                  <input
                    className="form__input"
                    type="password"
                    id="password"
                    name="password"
                    onChange={handleLoginChange}
                    value={loginFormInput.password} />
                </div>
                <button className="form__btn">Login</button>
              </form>
            </>) : (<>
              <form className="sign-form" onSubmit={handleSignUp}>
                <div className="form__row">
                  <label className="form__label" htmlFor="sign-username">Username:</label>
                  <input
                    className="form__input"
                    type="text"
                    name="signUsername"
                    id="sign-username"
                    onChange={handleSignChange}
                    value={signFormInput.signUsername} />
                </div>
                <div className="form__row">
                  <label className="form__label" htmlFor="sign-email">Email:</label>
                  <input
                    className="form__input"
                    type="email"
                    name="signEmail"
                    id="sign-email"
                    onChange={handleSignChange}
                    value={signFormInput.signEmail} />
                </div>

                <div className="form__row">
                  <label className="form__label" htmlFor="sign-password">Password:</label>
                  <input
                    className="form__input"
                    type="password"
                    name="signPassword"
                    id="sign-password"
                    onChange={handleSignChange}
                    value={signFormInput.signPassword} />
                </div>
                <button className="form__btn">Sign Up</button>
              </form>
            </>)}
          </div>
        </section>
      </main>
    </>
  )
}

export default LoginView;