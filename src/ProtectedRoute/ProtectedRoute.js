import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const ProtectedRoute = ({ 
  component: Component,
   ...rest 
  }) => {
  return (
    <Route {...rest} render={props => {
      return (
        rest.auth
        ? <Component {...props} />
        : <Redirect to={{
            pathname: '/',
            state: { 
              from: props.location 
            }
          }} />
      )}
    } />
  );
}

function mapStateToProps( { auth }) {
    return {
        auth
    }
}

export default connect(mapStateToProps)(ProtectedRoute);