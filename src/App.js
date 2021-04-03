import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home, ErrorPage, SingleSpotPage, Overlay } from './pages';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route
          exact
          path='/main/:id'
          children={
            <div>
              <SingleSpotPage />
              <Overlay />
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
