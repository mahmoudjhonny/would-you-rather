import React from "react";
import { Route, Redirect } from "react-router-dom";
import connect from "react-redux";

const ProtectedRoute = ({
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (rest.authedUser) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/",
                state: {
                  state: {from: props.location}
                }
              }}
            />
          );
        }
      }}
    />
  );
};

const mapStateToProps = ({ authedUser }) => {
    return {
        authedUser
    }
}

export default connect(mapStateToProps)(ProtectedRoute)