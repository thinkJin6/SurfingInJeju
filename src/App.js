import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  Home,
  MainPage,
  ErrorPage,
  SingleSpotPage,
  OverlayPage,
} from './pages';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/main'>
          <MainPage />
          <OverlayPage />
        </Route>
        <Route
          exact
          path='/main/:id'
          children={
            <div>
              <SingleSpotPage />
              <OverlayPage />
            </div>
          }
        />
        <Route path='*'>
          <ErrorPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
