import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import { UserSearchPage, ProfilePage } from '../features/users';
import NoMatchPage from '../shared/common/NoMatchPage';

const Routes = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/">
            <Redirect to="/search" />
          </Route>
          <Route path="/search" component={UserSearchPage} />
          <Route path="/profile/:slug" component={ProfilePage} />
          <Route path="*">
            <NoMatchPage />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
};

export default Routes;
