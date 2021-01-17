import React, { useState } from "react";
import FacebookLogin from "react-facebook-login";

export default function FacebookUserLogin(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleClick = (e) => {
    console.log(e);
  };
  const handleCallback = (response) => {
    console.log(response);
    setIsLoggedIn(true);
    props.history.push({
      pathname: `/user-reputation/3232/name/${response.name}/email/${
        response.email
      }/picture/${btoa(response.picture.data.url)}`,
      state: response,
    });
  };

  return (
    <div>
      {!isLoggedIn && (
        <FacebookLogin
          appId="1229330230836294"
          autoLoad={false}
          fields="name,email,picture"
          onClick={handleClick}
          callback={handleCallback}
        />
      )}
    </div>
  );
}
