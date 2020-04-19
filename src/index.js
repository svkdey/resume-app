import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
var DATA = {
  name: "I'm Souvik",
  subtext: "Fullstack Developer based in India",
  jobStatus: "Software Engineer @ Amdocs AD digital",
  email: "mailto:deysouvik955@gmail.com",
  githubURL: "https://github.com/svkdey",
  linkedinURL: "https:www.linkedin.com/in/svkdey"
};
ReactDOM.render(<App profileData={DATA} />, document.getElementById("root"));
