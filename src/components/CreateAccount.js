import React from "react";
import "./CreateAccount.css";
import { useNavigate } from "react-router-dom";

const CreateAccount = () => {
  const navigate = useNavigate();

  const handleCreateAccount1 = () => {
    navigate("/accountSettings");
  };

  return (
    <section className="create-page">
      <h1>
        Create your <br /> PopX account
      </h1>

      <form>
        <div className="input-container">
          <label htmlFor="full-name" className="input-label">
            Full Name<strong>*</strong>
          </label>
          <input
            type="text"
            id="full-name"
            className="input-field"
            placeholder=""
            required
          />
        </div>
        <div className="input-container">
          <label htmlFor="full-name" className="input-label">
            Phone Number<strong>*</strong>
          </label>
          <input
            type="text"
            id="full-name"
            className="input-field"
            placeholder=""
            required
          />
        </div>
        <div className="input-container">
          <label htmlFor="full-name" className="input-label">
            Email Address<strong>*</strong>
          </label>
          <input
            type="text"
            id="full-name"
            className="input-field"
            placeholder=""
            required
          />
        </div>
        <div className="input-container">
          <label htmlFor="full-name" className="input-label">
            Password<strong>*</strong>
          </label>
          <input
            type="text"
            id="full-name"
            className="input-field"
            placeholder=""
            required
          />
        </div>
        <div className="input-container">
          <label htmlFor="full-name" className="input-label">
            Company Name<strong>*</strong>
          </label>
          <input
            type="text"
            id="full-name"
            className="input-field"
            placeholder=""
            required
          />
        </div>
        <div className="radio-container">
          <h4>
            Are you an Agency?<strong>*</strong>
          </h4>
          <div className="label">
            <input type="radio" id="yes" name="answer" value="yes" />
            <label htmlFor="yes">Yes</label>
            <input type="radio" id="no" name="answer" value="no" />
            <label htmlFor="no">No</label>
          </div>
        </div>
      </form>

      <button onClick={handleCreateAccount1} className="create-account-1">
        Create Account
      </button>
    </section>
  );
};

export default CreateAccount;
