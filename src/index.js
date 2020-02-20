import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
var DATA = {
  name: "I'm Souvik",
  subtext: "Fullstack Developer based in India",
  jobStatus: "Software Engineer @ Amdocs AD digital",
  email: "mailto:deysouvik955@gmail.com",
  instaURL: "https://www.instagram.com/svkdey/",
  githubURL: "https://github.com/svkdey",
  linkedinURL: "https:www.linkedin.com/in/svkdey"
};
ReactDOM.render(<App profileData={DATA} />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
