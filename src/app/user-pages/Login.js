import { Auth } from 'aws-amplify';
import React from 'react';
import { Form, Spinner } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';
import isAuthed from '../auth/isAuthed';

export default function Login(){

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
  if (authed) return (<Redirect to='/dashboard'/>);

  return (
    <div>
      <div className="d-flex align-items-center auth px-0">
        <div className="row w-100 mx-0">
          <div className="col-lg-4 mx-auto">
            <div className="auth-form-light text-left py-5 px-4 px-sm-5">

              <h4>Hello! let's get started</h4>
              <h6 className="font-weight-light">Sign in to continue.</h6>
              <Form className="pt-3">
                <div className="mt-3">
                  <Link onClick={() => Auth.federatedSignIn()} className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" to="/loading">SIGN IN</Link>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>  
    </div>
  )

}