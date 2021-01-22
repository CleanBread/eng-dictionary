import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Header } from './components';
import { AuthPage, WordSetsPage, WordsPage } from './pages';

import './styles/index.scss';

function App() {
  return (
    <div className="jungle">
      <Header />
      <Switch>
        <Route exact path={['/', '/in']} component={AuthPage} />
        <Route exact path="/wordsets" component={WordSetsPage} />
        <Route exact path="/words" component={WordsPage} />
      </Switch>
    </div>
  );
}

export default App;
