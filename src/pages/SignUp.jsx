import React, { useRef } from "react";
import "../css/SignUp.css";
import { useState } from "react";
import { validateSignUp, validateLogIn } from "../utils/helper";

const SignUpForm = ({ handleSignUp }) => {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const confirmPasswordRef = useRef("");
  const errorMsgRef = useRef("");

  const handleSingupClick = (event) => {
    event.preventDefault();
    const data = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      confirmPassword: confirmPasswordRef.current.value,
    };
    const { errors, success } = validateSignUp(data);

    if (success) {
      errorMsgRef.current.innerText = "Data Submitted Successfully";
      errorMsgRef.current.style.color = "green";
      nameRef.current.value = "";
      emailRef.current.value = "";
      passwordRef.current.value = "";
      confirmPasswordRef.current.value = "";
    } else {
      errorMsgRef.current.innerText = errors[0];
      errorMsgRef.current.style.color = "red";
    }
    handleSignUp(success);
  };

  return (
    <div className="form-container">
      <form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" ref={nameRef} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" ref={emailRef} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            ref={passwordRef}
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            type="password"
            id="confirm-password"
            name="confirm-password"
            ref={confirmPasswordRef}
          />
        </div>
        <p ref={errorMsgRef}></p>
        <button
          type="submit"
          id="signup"
          className={"submit-enable"}
          onClick={handleSingupClick}>
          Submit
        </button>
      </form>
    </div>
  );
};

const LoginForm = () => {
  const [isLoginEnabled, setIsLoginEnabled] = useState(false);
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const errorRef = useRef("");

  const handleLogin = (e) => {
    e.preventDefault();
    const data = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    const { errors, success } = validateLogIn(data);
    if (success) {
      if (data.email == "venky@gmail.com" && data.password == "1234567") {
        errorRef.current.innerText = "Logged In Successfully";
        errorRef.current.style.color = "green";
        emailRef.current.value = "";
        passwordRef.current.value = "";
      } else {
        errorRef.current.innerText = "email/password does not match!!!";
        errorRef.current.style.color = "red";
      }
    } else {
      errorRef.current.innerText = errors[0];
      errorRef.current.style.color = "red";
    }
  };
  return (
    <div className="form-container">
      <form>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" ref={emailRef} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            ref={passwordRef}
          />
        </div>
        <p ref={errorRef}></p>
        <button
          type="submit"
          id="login"
          className={"submit-enable"}
          onClick={handleLogin}>
          Log In
        </button>
      </form>
    </div>
  );
};

const SignUp = () => {
  const [isRegistered, setIsRegistered] = useState(false);
  const handleSignUp = (success) => {
    setTimeout(() => {
      setIsRegistered(success);
    }, 3000);
  };
  return (
    <main className="signup-bg">
      <section>
        <h1>QUIZZIE</h1>
        <div className="btn-container">
          <button
            className={isRegistered ? "button-disabled" : "button-enable"}>
            Sign Up
          </button>
          <button
            className={isRegistered ? "button-enable" : "button-disabled"}>
            Log In
          </button>
        </div>
      </section>
      <section>
        {isRegistered ? (
          <LoginForm />
        ) : (
          <SignUpForm handleSignUp={handleSignUp} />
        )}
      </section>
    </main>
  );
};

export default SignUp;
