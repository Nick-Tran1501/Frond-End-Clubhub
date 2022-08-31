import React, { useState, useEffect } from "react";
import "../ProfilePage";
import "antd/dist/antd.css";
import { Button, Modal } from "antd";

const ProfileIntro = () => {
    
  return (
    <div>
      <div className="ab">
        <div className="ml intro">
          <div className="it it-row1">
            <h3>About</h3>
          </div>
          <div className="it it-row2">
            <div className="p-row">
              <i className="fa-solid fa-graduation-cap"></i>
              <div className="p-note">
                <p>Graduate at </p>
              </div>
            </div>
            <div className="p-row">
              <i className="bi bi-briefcase-fill"></i>
              <div className="p-note">
                <p>Work in </p>
              </div>
            </div>
            <div className="p-row">
              <i className="bi bi-house-fill"></i>
              <div className="p-note">
                <p>Live in </p>
              </div>
            </div>
            <div className="p-row">
              <i className="bi bi-envelope-fill"></i>
              <div className="p-note">
                <p></p>
              </div>
            </div>
            <div className="p-row">
              <i className="bi bi-blockquote-left"></i>
              <div className="p-note">
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileIntro;
