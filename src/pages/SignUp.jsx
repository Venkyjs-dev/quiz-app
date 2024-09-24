import React from "react";
import "../css/SignUp.css";

const SignUp = () => {
  return (
    <div className="signup-bg">
      <div className="signup-wrapper">
        <h1>QUIZZIE</h1>
        <div className="top-section">
          <p className="sign-up-span ">Sign Up</p>
          <p>Login In</p>
        </div>
        <form>
          <div>
            <label>Name</label>
            <input type="text" />
          </div>
          <div>
            <label>Email</label>
            <input type="email" />
          </div>
          <div>
            <label>password</label>
            <input type="password" />
          </div>
          <div>
            <label>Confirm Password</label>
            <input type="password" />
          </div>
        </form>
        <div>
          <button>Sign-Up</button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
