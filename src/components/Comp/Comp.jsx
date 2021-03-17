import React from "react";
import { resumeData } from "../../resumeData";
import "./comp.css";

function Comp() {
  return (
    <section id="competences" className="col-12">
      <h1 className="title">Compétences</h1>
      <div className="row comp">
        <div className=" col-6 text-left">
          <h4>Compétences techniques</h4>
          <ul>
            {resumeData.comp.hard.map((comp) => (
              <li>
                <h5>{comp.name}</h5>
                <p>{comp.description}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className=" col-6 text-left">
          <h4>Compétences générales</h4>
          <ul>
            {resumeData.comp.soft.map((comp) => (
              <li>
                <h5>{comp.name}</h5>
                <p>{comp.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Comp;
