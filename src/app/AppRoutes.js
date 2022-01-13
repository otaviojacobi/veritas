import React, { Component, lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Spinner from '../app/shared/Spinner';


const Dashboard = lazy(() => import('./dashboard/Dashboard'));
const Error404 = lazy(() => import('./error-pages/Error404'));
const Login = lazy(() => import('./user-pages/Login'));
const ProtectedRoute = lazy(() => import('./auth/ProtectedRoute'));
const Orders = lazy(() => import('./wallet/Orders'));

class AppRoutes extends Component {
  render () {
    return (
      <Suspense fallback={<Spinner/>}>
        <Switch>
          
          <ProtectedRoute path="/dashboard" component={ Dashboard } />
          <ProtectedRoute path="/wallet/order" component={ Orders } />
          
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