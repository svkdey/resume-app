import React from "react";

export default function Project() {
  return (
    <div className="container_user">
      <div className="left-part">
        <h3>Projects</h3>
      </div>
      <div className="right-part">
        <div className="project-item">
          <a
            className="project-title"
            href="https://svkdey.github.io/covid-19-frontend/"
          >
            COVID-19 dashboard
          </a>{" "}
          <i className="fa fa-long-arrow-right project-title"></i>
          <div className="project-desc">
            Simple dashboard to keep a track on pandemic .
          </div>
        </div>
        <div className="project-item">
          <a
            className="project-title"
            href="https://github.com/svkdey/js-client-file-downloader"
          >
            JS-client-file-downloader
          </a>{" "}
          <i className="fa fa-long-arrow-right project-title"></i>
          <div className="project-desc">
            JS Client File Downloader is a simple package to download json, csv,
            pdf, docx, text files from client side(Browser).
          </div>
        </div>
        <div className="project-item">
          <a
            className="project-title"
            href="https://github.com/svkdey/ipl_project"
          >
            KKR App
          </a>{" "}
          <i className="fa fa-long-arrow-right project-title"></i>
          <div className="project-desc">
            Mobile first view based Kolkata Knight riders website using by
            React,firebase.
          </div>
        </div>
        <div className="project-item">
          <a
            className="project-title"
            href="https://github.com/svkdey/Ecommerce"
          >
            Ecommerce
          </a>{" "}
          <i className="fa fa-long-arrow-right project-title"></i>
          <div className="project-desc">
            Web app built on the MERN (MongoDB, Express, React, Node) stack for
            Music store
          </div>
        </div>

        <div className="project-item">
          <a
            className="project-title"
            href="https://github.com/svkdey/SpookyStoryApp"
          >
            SpookyStoryApp
          </a>{" "}
          <i className="fa fa-long-arrow-right project-title"></i>
          <div className="project-desc">Full stack CURD project</div>
        </div>
      </div>
    </div>
  );
}
