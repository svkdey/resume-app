import React from "react";

function TimeLine() {
  const data = [
    {
      company: "Tata Consultancy Services",
      url: "http://tcs.com/",
      time: `June 2018 - Octo 2019`,
      title: "TDC",
      icon: "fa fa-building-o",
      descrpition: [
        "Developed and maintained code for in-house and client websites primarily using React, CSS, Sass, JavaScript, and jQuery",
        "Worked on Oracle service Bus,Oracle service gateway."
      ]
    },
    {
      company: "Amdocs",
      url: "https://amdocs.com/",
      time: `October 2019 - Present`,
      title: "AD digital India",
      icon: "fa fa-building-o",
      descrpition: [
        "Working in backend of OPTUS's Ecommerce webapp. ",
        "Worked On UI of Singtel's Ecommerce Website  .",
        "Built a TDD framework based on React and It's a CLI for automatic creation of Template, basic test-cases .",
        "Made World Cup Update (Dashboard end to end flow, Direct buy,Consume Evoucher , MiniStatements, and small updates ) for Amdocs customer Astro ."
      ]
    }
  ];
  const data_education = [
    {
      university: "Birati High School (H.S)",
      time: `June 2014`,
      icon: "fa fa-graduation-cap",
      descrpition: ["Major : Science With Score : 80%"]
    },
    {
      university: "Heritage Institute Of Engineering",
      time: `June 2014 - May 2018`,
      icon: "fa fa-graduation-cap",
      descrpition: ["Major : Electrical Engineering With YGPA : 8.65"]
    }
  ];
  const fetchListdata = data => {
    return (
      <ul>
        {data.map((item, key) => {
          return <li key={key}>{item}</li>;
        })}
      </ul>
    );
  };
  const fetchEducationalListdata = data => {
    return data.map((item, key) => {
      return <div key={key}>{item}</div>;
    });
  };
  const renderData = data => {
    return data.map((item, key) => {
      return (
        <li key={key}>
          <a href={item.url}>
            <i className={item.icon} aria-hidden="true"></i> {item.company}
          </a>
          <a className="float-right">{item.time}</a>
          <div className="timelinne-title">
            <strong>{item.title}</strong>
          </div>
          <p>{fetchListdata(item.descrpition)}</p>
        </li>
      );
    });
  };
  const fetchEducationalData = data => {
    return data.map((item, key) => {
      return (
        <li key={key}>
          <a>
            <i className={item.icon} aria-hidden="true"></i> {item.university}
          </a>
          <a className="float-right">{item.time}</a>

          <p>{fetchEducationalListdata(item.descrpition)}</p>
        </li>
      );
    });
  };
  return (
    <div className="container_user">
      <div className="left-part mt-1rem">
        <h3>Time Line</h3>
      </div>
      <div className="right-part">
        <ul class="timeline mr-1rem">
          {fetchEducationalData(data_education)}
          {renderData(data)}
        </ul>
      </div>
    </div>
  );
}

export default TimeLine;
