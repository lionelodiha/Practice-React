import React from 'react'

import { Helmet } from 'react-helmet'

import './login.css'

const Login = (props) => {
  return (
    <div className="login-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="login-login">
        <img
          alt="image147211"
          src="/external/image147211-t7ty-800w.png"
          className="login-image14"
        />
        <span className="login-text">
          <span className="login-text01">
            <span>Log in to</span>
            <br></br>
            <span></span>
          </span>
          <span>OluxeRealty</span>
        </span>
        <div className="login-frame31">
          <img
            alt="devicongoogle7211"
            src="/external/devicongoogle7211-4f1.svg"
            className="login-devicongoogle"
          />
          <span className="login-text06">
            <span>Log in with Google</span>
          </span>
        </div>
        <div className="login-frame32">
          <img
            alt="mail7211"
            src="/external/mail7211-1qpk.svg"
            className="login-mail"
          />
          <span className="login-text08">
            <span>Email</span>
          </span>
        </div>
        <div className="login-frame33">
          <img
            alt="lock7211"
            src="/external/lock7211-w903.svg"
            className="login-lock"
          />
          <span className="login-text10">
            <span>Password</span>
          </span>
        </div>
        <div className="login-frame34">
          <span className="login-text12">
            <span>Log in</span>
          </span>
        </div>
        <span className="login-text14">
          <span>or</span>
        </span>
        <span className="login-text16">
          <span>Forgot password?</span>
        </span>
        <span className="login-text18">
          <span className="login-text19">Don’t have an account?</span>
          <span> Sign up</span>
        </span>
        <img
          alt="Line17211"
          src="/external/line17211-5ve.svg"
          className="login-line1"
        />
        <img
          alt="Line27211"
          src="/external/line27211-xto.svg"
          className="login-line2"
        />
        <img
          alt="WhatsAppImage20240106at214227231"
          src="/external/whatsappimage20240106at214227231-s06-200h.png"
          className="login-whats-app-image20240106at21422"
        />
      </div>
    </div>
  )
}

export default Login
