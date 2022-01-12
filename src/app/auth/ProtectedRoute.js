import * as React from 'react';
import { Redirect, Route } from 'react-router-dom';
import Spinner from '../shared/Spinner';
import isAuthed from './isAuthed';



export default function ProtectedRoute ({ component: Component, ...rest }) {

    const [authed, setAuthed] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
  
    React.useEffect(() => {
      async function updateAuth(){
        const auth = await isAuthed();
        setAuthed(auth);
        setLoading(false);
      }
      updateAuth();
    }, [setAuthed, isAuthed]);


    if (loading) return (<Spinner/>);

    return (
      <Route
        {...rest}
  
        render={(props) => authed === true
          ? <Component {...props} />
          : <Redirect to="/"/>
        }
      />
    )
  }