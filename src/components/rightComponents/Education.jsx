import React from "react";

export default function Education() {
  return (
    <div className="container_user">
      <div className="left-part">
        <h3>Education</h3>
      </div>
      <div className="right-part">
        <div className="university">
          <a href="https://www.heritageit.edu/">
            Heritage Institute Of Engineering
          </a>
        </div>

        <div className="major">
          <strong>Major :</strong> Electrical Engineering
        </div>
        <div className="study-abroad">
          <strong>YGPA : </strong>8.65
        </div>
        <div className="grad-date">
          <strong>Graduation </strong>: May 2018
        </div>
      </div>
    </div>
  );
}
