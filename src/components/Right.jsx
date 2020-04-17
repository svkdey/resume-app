import React from "react";
import Introduction from "./rightComponents/Introduction";
import Project from "./rightComponents/Project";
import Skill from "./rightComponents/Skill";
import TimeLine from "./rightComponents/TimeLine";

export default function Right(props) {
  return (
    <div className="right-inner">
      <Introduction />
      <Skill />
      <Project />
      <TimeLine />
    </div>
  );
}
