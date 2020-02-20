import React from "react";

export default function Skill() {
  return (
    <div className="container">
      <div className="left-part">
        <h3>Skill</h3>
      </div>
      <div className="right-part">
        <div className="skill-category">
          <strong>Languages: &nbsp;</strong>
          <span>JavaScript (ES6), HTML5, CSS3, Java</span>
        </div>
        <div className="skill-category">
          <strong>Libraries &amp; Frameworks: &nbsp;</strong>
          <span>
            React,Redux, jQuery, Bootstrap, Material CSS, Handlebars, Node, SQL,
            MongoDB, AngularJS, Express, Chakra UI, Jest , Enzyme , Chai ,shell
            script
          </span>
        </div>
        <div className="skill-category">
          <strong>Tools: &nbsp;</strong>
          <span>Git &amp; Github, Command Line, Postman ,Amdocs Ginger</span>
        </div>
      </div>
    </div>
  );
}
