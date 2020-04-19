import React from "react";

export default function Left(props) {
  return (
    <div>
      <div className="bg-img">
        <div className="left-inner">
          <div className="info">
            <h2 className="name">
              <span className="hey">Hi, </span>
              {props.name}
            </h2>
            <div className="subtext">{props.subtext}</div>
            <div className="jobStatus">{props.jobStatus}</div>
            <div className="social-linksnew">
              {/* <a href={props.twitterURL}>
                <i className="fa fa-facebook fa-2x"></i>
              </a>
              <a href={props.instaURL}>
                <i className="fa fa-camera fa-2x"></i>
              </a> */}
              <div className="mailto">Mail to : deysouvik955@gmail.com</div>

              <a href={props.githubURL}>
                <i className="fa fa-github fa-2x"></i>
              </a>
              <a href={props.linkedinURL}>
                <i className="fa fa-linkedin fa-2x"></i>
              </a>
            </div>
            <button className="button">
              <a href="https://drive.google.com/file/d/1-092LRvkuTexSfO4vnqW-pfk_hpNn37t/view">
                RESUME
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
