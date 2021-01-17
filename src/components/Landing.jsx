import React from "react";
import logo1 from "../img/logo1.png";
import FacebookUserLogin from "./FacebookUserLogin";
import GoogleUserLogin from "./GoogleUserLogin";

export default function Landing(props) {
  return (
    <div class="container">
      <h1>Landing Page</h1>
      <p></p>
      <div class="row gx-5">
        <div class="col">
          <div class="p-3 border bg-light">
            {" "}
            Do you want to login to the reputationair?
            <p>The best way is to login bye your social media accounts</p>
            <br />
            <img src={logo1} alt="logomun" />
          </div>
        </div>
        <div class="col">
          <div class="p-3 border bg-light">
            Sign in Options
            <div class="d-grid gap-2 col-6 mx-auto">
              <FacebookUserLogin {...props} />
              <GoogleUserLogin {...props} />
            </div>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
}
