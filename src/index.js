import { Amplify } from 'aws-amplify';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './app/App';
import "./i18n";
import * as serviceWorker from './serviceWorker';

let redirectSignIn, redirectSignOut;

if (process.env.NODE_ENV === 'development') {
  redirectSignIn = 'http://localhost:3000/dashboard';
  redirectSignOut = 'http://localhost:3000/dashboard';
} else {
  redirectSignIn = 'https://main.d3521c4azxxe3o.amplifyapp.com/dashboard';
  redirectSignOut = 'https://main.d3521c4azxxe3o.amplifyapp.com/dashboard';
}

Amplify.configure({
  Auth: {
    region: 'sa-east-1',
    userPoolId: 'sa-east-1_noalXfhON',
    userPoolWebClientId: '63ao0592n5itajnsg9tndu0drr',
    oauth: {
      domain: 'veritas.auth.sa-east-1.amazoncognito.com',
      scope: ['phone', 'email', 'openid', 'profile','aws.cognito.signin.user.admin'],
      redirectSignIn: redirectSignIn,
      redirectSignOut: redirectSignOut,
      responseType: 'code'
    }
  }
})

ReactDOM.render(
  <BrowserRouter basename="/">
    <App />
  </BrowserRouter>
, document.getElementById('root'));

serviceWorker.unregister();