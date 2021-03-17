import React from "react";
import { resumeData } from "../../resumeData";
import "./exp.css";

function Exp() {
  return (
    <section id="experiences" className="col-12">
      <h1 className="title">Expériences</h1>
      <ul id="experiencesList">
        <li className="row experience text-left">
          <h4>03/2020 - Aujourd'hui</h4>
        </li>
        <div className="row devExp">
          {resumeData.exp.dev.map((e) => (
            <div key={e.id} className="exp">
              <h4>{e.name}</h4>
              <h5>{e.type}</h5>
              <p>{e.description}</p>
              <span>{e.stack}</span>
            </div>
          ))}
        </div>
        <li className="row experience text-left" />
        <div className="row nodevExp">
          {resumeData.exp.noDev.map((e) => (
            <div key={e.id} className="exp">
              <h4>{e.date}</h4>
              <h6>{e.theme}</h6>
              <h5>{e.job}</h5>
              <p>{e.description}</p>
              <span>{e.realization}</span>
            </div>
          ))}
        </div>
      </ul>
    </section>
  );
}

export default Exp;
