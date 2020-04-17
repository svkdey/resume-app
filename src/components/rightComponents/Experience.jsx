import React from "react";

export default function Experience() {
  return (
    <div className="container_user">
      <div className="left-part">
        <h3>Experience</h3>
      </div>
      <div className="right-part">
        <div className="exp-item">
          <div className="job">
            <div className="company-container">
              <div className="company">
                <a href="https://amdocs.com/">Amdocs</a>
              </div>

              <div className="duration">October 2019 &mdash; Present</div>
            </div>
          </div>
          <div className="title">AD digital India</div>
          <ul className="description">
            <li>Working On Singtel's Ecommerce project .</li>
            <li>
              Built a TDD frameword based on React and It's CLI for automatic
              creation of Template, basic test-cases .
            </li>
            <li>
              Made World Cup Update (Dashboard end to end flow, Direct buy,
              Consume Evoucher , MiniStatements, and small updates ) for Amdocs
              customer Astro .
            </li>
          </ul>
        </div>
        <div className="exp-item">
          <div className="job">
            <div className="company-container">
              <div className="company">
                <a href="http://tcs.com/">Tata Consultancy Services</a>
              </div>

              <div className="duration">June 2018 &mdash; Octo 2019</div>
            </div>
          </div>
          <ul className="description">
            <li>
              Developed and maintained code for in-house and client websites
              primarily using React, CSS, Sass, JavaScript, and jQuery
            </li>
            <li>Worked on Oracle service Bus,Oracle service gateway.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
