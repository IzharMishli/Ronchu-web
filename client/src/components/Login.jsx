import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';

export default function(props) {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [passwordError, setpasswordError] = useState("");
  const [emailError, setemailError] = useState("");
    const [isAuth, setAuth] = useState(false);
  const handleValidation = (event) => {
    let formIsValid = true;

    if (!email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
      formIsValid = false;
      setemailError("Email Not Valid");
      return false;
    } else {
      setemailError("");
      formIsValid = true;
    }

    if (!password.match(/^[a-zA-Z]{8,22}$/)) {
      formIsValid = false;
      setpasswordError(
        "Only Letters and length must best min 8 Chracters and Max 22 Chracters"
      );
      return false;
    } else {
      setpasswordError("");
      formIsValid = true;
    }

    return formIsValid;
  };

  function CheckLogin(){
      if (email === "123@gmail.com" && password === "123");
      return true;
  }

    const onsubmitted = (e) => {
        e.preventDefault();
        props.func({email:email, pass:password})
    }
  
    return (
        <div className="App">
          <div className="container">
            <div className="row d-flex justify-content-center">
            
              <div className="col-md-4">
                <form id="loginform" onSubmit={onsubmitted}>
                  <div className="form-group">
                    <label>Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      id="EmailInput"
                      name="EmailInput"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                      onChange={(event) => setEmail(event.target.value)}
                    />
                    <small id="emailHelp" className="text-danger form-text">
                      {emailError}
                    </small>
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Password"
                      onChange={(event) => setPassword(event.target.value)}
                    />
                    <small id="passworderror" className="text-danger form-text">
                      {passwordError}
                    </small>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
              
            </div>
          </div>
        </div>
      );

  
}
