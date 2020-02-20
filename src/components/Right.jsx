import React from "react";
import Introduction from "./rightComponents/Introduction";
import Skill from "./rightComponents/Skill";
import Education from "./rightComponents/Education";
import Experience from "./rightComponents/Experience";
import Project from "./rightComponents/Project";

export default function Right(props) {
  return (
    <div className="right-inner">
      <Introduction />
      <Skill />
      <Education />
      <Experience />
      <Project />
    </div>
  );
}
