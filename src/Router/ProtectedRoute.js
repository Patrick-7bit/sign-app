import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../Auth";

/*we create a protected route to check if the user is authenticated by a token to get access to the private area. With the hook useAuth we retrieve the token. If the token is missing the user is redirected to the login page*/
const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { authTokens } = useAuth();

  return (
    <Route
      {...rest}
      render={props =>
        authTokens ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default ProtectedRoute;
