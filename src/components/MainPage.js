import React from "react";
import "./MainPage.css";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const navigate = useNavigate();

  const handleCreateAccount = () => {
    navigate("/createAccount");
  };

  const handleSighIn = () => {
    navigate("/SignIn");
  };

  return (
    <section className="main-page">
      <div className="introduction">
        <h1>Welcome to PopX</h1>

        <p>
          It is a long established fact that a reader will be distracted by the
          readable content.
        </p>
      </div>

      <div className="buttons">
        <button onClick={handleCreateAccount} className="create-account">
          Create Account
        </button>

        <button onClick={handleSighIn} className="login-account">
          Already Registered? Login
        </button>
      </div>
    </section>
  );
};

export default MainPage;
