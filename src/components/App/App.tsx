import { createBrowserHistory, History } from 'history';
import * as React from 'react';
import { hot } from 'react-hot-loader';
import { Route, Router, Switch } from 'react-router';
import { Main } from '../pages/Main/Main';
import { ErrorBoundary } from './ErrorBoundary/ErrorBoundary';

const history: History = createBrowserHistory();

export const App: React.FC = () => {
   return (
      <ErrorBoundary>
         <Router history={history}>
            <Switch>
               <Route exact path={'/'} component={Main} />
            </Switch>
         </Router>
      </ErrorBoundary>
   );
};

export default hot(module)(App);
