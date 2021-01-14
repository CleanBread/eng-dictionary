import React from 'react';
import { Route } from 'react-router-dom';

import { SignUpForm, SignInForm } from '../../modules';

import './Auth.scss';

const AuthPage = () => {
  const [isSignUp, setSignUp] = React.useState(false);

  return (
    <div className="auth">
      <div className="row">
        <div className="auth__form box">
          <Route exact path="/" component={SignUpForm} />
          <Route exact path="/in" component={SignInForm} />
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
