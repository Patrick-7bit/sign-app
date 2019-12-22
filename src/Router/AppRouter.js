import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignUp from "../components/SignUp";
import SignIn from "../components/SignIn";
import ProtectedRoute from "./ProtectedRoute";
import PrivateArea from "../components/PrivateArea";
import { AuthContext } from "../Auth";

/* We use react-router-dom to navigate between the pages. Thanks to the Context Provider we can
pass props and therefore the token to the components*/

export default function AppRouter(props) {
  const [authTokens, setAuthTokens] = useState();

  const setTokens = data => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  };
  return (
    <div>
      <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
        <BrowserRouter>
          <Switch>
            <ProtectedRoute path="/privatearea" component={PrivateArea} />
            <Route path="/" component={SignUp} exact={true} />
            <Route path="/login" component={SignIn} />
          </Switch>
        </BrowserRouter>
      </AuthContext.Provider>
    </div>
  );
}
