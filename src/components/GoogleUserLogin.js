import GoogleLogin from "react-google-login";
import React, { useState } from "react";

export default function FacebookLogin(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSuccessLogin = (response) => {
    setIsLoggedIn(true);
    console.log(response);
    const google = response.profileObj;
    props.history.push({
      pathname: `/user-reputation/1809/name/${google.givenName} ${
        google.familyName
      }/email/${google.email}/picture/${btoa(google.imageUrl)}`,
      state: response,
    });
  };

  const handleFailureLogin = (response) => {
    console.log(response);
  };

  return (
    <div>
      {!isLoggedIn && (
        <GoogleLogin
          clientId="473282909693-8r82cd1fggpbvqp9j7tljn40j21e96f3.apps.googleusercontent.com"
          buttonText="Login With Google"
          onSuccess={handleSuccessLogin}
          onFailure={handleFailureLogin}
          cookiePolicy={"single_host_origin"}
        />
      )}
    </div>
  );
}
