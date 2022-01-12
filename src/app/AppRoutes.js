import React, { Component, lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Spinner from '../app/shared/Spinner';


const Dashboard = lazy(() => import('./dashboard/Dashboard'));
const Error404 = lazy(() => import('./error-pages/Error404'));
const Login = lazy(() => import('./user-pages/Login'));
const ProtectedRoute = lazy(() => import('./auth/ProtectedRoute'));

class AppRoutes extends Component {
  render () {
    return (
      <Suspense fallback={<Spinner/>}>
        <Switch>
          
          <ProtectedRoute path="/dashboard" component={ Dashboard } />
          <Route path="/login" component={ Login } />
          <Route path="/404" component={ Error404 } />
          <Route path="/loading" component ={ Spinner }/>


          <Redirect to="/login"/>
        </Switch>
      </Suspense>
    );
  }
}

export default AppRoutes;