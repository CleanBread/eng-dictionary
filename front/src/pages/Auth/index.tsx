import React from 'react';
import { Route } from 'react-router-dom';

import { SignUpForm, SignInForm } from '../../forms';

import './Auth.scss';

const AuthPage = () => {
  // const [isSignUp, setSignUp] = React.useState(false);

  return (
    <main className="auth">
      <div className="row">
        <div className="auth__form box">
          <Route exact path="/up" component={SignUpForm} />
          <Route exact path="/in" component={SignInForm} />
        </div>
      </div>
    </main>
  );
};

export default AuthPage;
