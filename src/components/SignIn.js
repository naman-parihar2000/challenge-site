import React from "react";
import "./SignIn.css";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();

  const handleSighIn = () => {
    navigate("/accountSettings");
  };

  return (
    <section className="sigh-in-page">
      <div className="sigh-in-introduction">
        <h1>
          SighIn to your <br /> PopX account
        </h1>

        <p>
          It is a long established fact that a reader will be distracted by the
          readable content.
        </p>
      </div>

      <form>
        <div className="input-container">
          <label htmlFor="email-address" className="input-label">
            Email Address
          </label>
          <input
            type="text"
            id="full-name"
            className="input-field"
            placeholder="enter e-mail address"
            required
          />
        </div>

        <div className="input-container">
          <label htmlFor="password" className="input-label">
            Password
          </label>
          <input
            type="text"
            id="full-name"
            className="input-field"
            placeholder="enter password"
            required
          />
        </div>
      </form>

      <button onClick={handleSighIn} className="login-account-1">
        Login
      </button>
    </section>
  );
};

export default SignIn;
