import React from "react";
import "./header.css";
import { resumeData } from "../../resumeData";

function Header() {
  return (
    <div className="header row">
      <div className="col-6 text-center" id="hleft">
        <h1 id="name">{resumeData.header.name}</h1>
        <br />
        <h3 id="job">{resumeData.header.job}</h3>
      </div>
      <div className="col-5 text-right" id="hright">
        <br />
        <h4 id="phone">{resumeData.header.phone}</h4>
        <h4 id="mail">{resumeData.header.mail}</h4>
        <h4 id="portfolio">{resumeData.header.portfolio}</h4>
      </div>
    </div>
  );
}

export default Header;
