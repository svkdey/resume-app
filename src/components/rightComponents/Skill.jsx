import React from "react";

export default function Skill() {
  return (
    <div className="container_user">
      <div className="left-part">
        <h3>Skill</h3>
      </div>
      <div className="right-part">
        <div className="skill-category">
          <strong>Languages: &nbsp;</strong>
          <span>Java,JavaScript (ES6), HTML5, CSS3</span>
        </div>
        <div className="skill-category">
          <strong>Libraries &amp; Frameworks: &nbsp;</strong>
          <span>Spring, JDBC, JPA, Spring security,
            Micorservices(Netflix OSS), 
            React,Redux, jQuery, Bootstrap, Material CSS, Node, Express, Shell script
          </span>
        </div>
        <div className="skill-category">
          <strong>DB : &nbsp;</strong>
          <span>SQL,MongoDB</span>
        </div>
        <div className="skill-category">
          <strong>Tools: &nbsp;</strong>
          <span>Git &amp; Github, Postman ,Perforce</span>
        </div>
        <div className="skill-category">
          <strong>Cloud: &nbsp;</strong>
          <span>AWS</span>
        </div>
      </div>
    </div>
  );
}
