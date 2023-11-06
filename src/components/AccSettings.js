import React from "react";
import "./AccSettings.css";
import image from "../assets/picture.jpg";

const AccSettings = () => {
  return (
    <section className="account">
      <div className="account-setting">
        <h1>Account Settings</h1>
      </div>

      <div className="pic-name-display flex">
        <div>
          <img className="image" src={image} alt="DP" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
            fill="white"
          >
            <path d="M480-260q75 0 127.5-52.5T660-440q0-75-52.5-127.5T480-620q-75 0-127.5 52.5T300-440q0 75 52.5 127.5T480-260Zm0-80q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29ZM160-120q-33 0-56.5-23.5T80-200v-480q0-33 23.5-56.5T160-760h126l74-80h240l74 80h126q33 0 56.5 23.5T880-680v480q0 33-23.5 56.5T800-120H160Zm0-80h640v-480H638l-73-80H395l-73 80H160v480Zm320-240Z" />
          </svg>
        </div>

        <div className="name-email">
          <h2>Marry Doe</h2>
          <p>marry@gmail.com</p>
        </div>
      </div>

      <div className="intro-paragraph">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s.
      </div>

      <hr class="dash" />
    </section>
  );
};

export default AccSettings;
