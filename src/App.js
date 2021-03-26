import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import { Navbar } from './components';
import { Home, MainPage, ErrorPage } from './pages';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/main'>
          <MainPage />
        </Route>
        <Route path='*'>
          <ErrorPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
