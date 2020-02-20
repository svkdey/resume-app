import React, { useState, useEffect } from "react";
import Switch from "react-switch";

import "./App.css";

import Left from "./components/Left";
import Right from "./components/Right";
import { ThemeProvider, createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
body{
  background-color:${props => (props.theme.mode === "dark" ? "#222" : "#EEE")};
  color:${props => (props.theme.mode === "dark" ? "#EEE" : "#222")};
}`;
function App(props) {
  const [theme, setTheme] = useState({ mode: "light", icon: "fa fa-moon-o" });
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    var sessionItem = localStorage.getItem("color-mode");
    console.log(sessionItem);
    setTheme(
      sessionItem === "dark"
        ? { mode: "dark", icon: "fa fa-sun-o" }
        : { mode: "light", icon: "fa fa-moon-o" }
    );
    setChecked(sessionItem === "dark" ? true : false);
  }, [checked]);
  const changetheme = () => {
    console.log("fired");
    setTheme(
      theme.mode === "dark"
        ? { mode: "light", icon: "fa fa-moon-o" }
        : { mode: "dark", icon: "fa fa-sun-o" }
    );
  };

  function getBackGround(iconName) {
    return iconName === "fa fa-sun-o" ? "sun" : "moon";
  }
  const handleChange = () => {
    var prevState = checked;
    setChecked(!prevState);
    changetheme();
    var themeMode = theme.mode;
    console.log(themeMode);
    var colorMode;
    if (themeMode === "light") {
      colorMode = "dark";
    } else {
      colorMode = "light";
    }
    localStorage.setItem("color-mode", colorMode);
  };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="app">
        <div className={`themeSetter ${getBackGround(theme.icon)}`}>
          <div className="iconContainer">
            <div className="item1">
              <i className="fa fa-sun-o"></i>
            </div>
            <div className="item2">
              <Switch
                onChange={e => handleChange()}
                // onClick={e => changetheme()}
                checked={checked}
              />
            </div>

            <div className="item3">
              <i className="fa fa-moon-o"></i>
            </div>
          </div>
        </div>

        <div className="left">
          <Left
            name={props.profileData.name}
            subtext={props.profileData.subtext}
            jobStatus={props.profileData.jobStatus}
            email={props.profileData.email}
            instaURL={props.profileData.instaURL}
            githubURL={props.profileData.githubURL}
            linkedinURL={props.profileData.linkedinURL}
          />
        </div>
        <div className="right">
          <Right changeTheme={changetheme} themeIcon={theme.icon} />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
