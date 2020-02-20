import React from "react";

export default function Project() {
  return (
    <div className="container">
      <div className="left-part">
        <h3>Projects</h3>
      </div>
      <div className="right-part">
        <div className="project-item">
          <a
            className="project-title"
            href="https://github.com/svkdey/js-client-file-downloader"
          >
            JS-client-file-downloader
          </a>
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
          </a>
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
          </a>
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
          </a>
          <div className="project-desc">Full stack CURD project</div>
        </div>
      </div>
    </div>
  );
}
