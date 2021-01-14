import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Header } from './components';
import { AuthPage } from './pages';

import './styles/index.scss';

function App() {
  return (
    <div className="jungle">
      <Header />
      <Switch>
        <Route exact path={['/', '/in']} component={AuthPage} />
      </Switch>
    </div>
  );
}

export default App;
