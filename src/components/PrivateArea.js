import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "../Auth";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

function PrivateArea() {
  const classes = useStyles();
  const { authTokens } = useAuth();

  const [isAccessed, setIsAccessed] = useState(false);
  const [description, setDescription] = useState();

  const config = {
    headers: { "auth-token": authTokens }
  };
  /* When the user is logged in the private area, he can click to access the private message with an axios call which sends the token as a header to the server*/

  const handleAccess = async e => {
    try {
      e.preventDefault();
      const response = await axios.get(
        "https://back-sign-app.herokuapp.com/private",
        config
      );
      if (response.data) {
        setDescription(response.data.description);
        setIsAccessed(true);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div>
      <h1>Private Area</h1>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
        onClick={handleAccess}
      >
        Click to access
      </Button>
      {isAccessed && <h2>{description}</h2>}
    </div>
  );
}

export default PrivateArea;
