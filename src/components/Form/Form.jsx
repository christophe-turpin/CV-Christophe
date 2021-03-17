import React from "react";
import { resumeData } from "../../resumeData";
import "./form.css";

function Form() {
  return (
    <section id="formations" class="col-12">
      <h1 className="title">Formations</h1>
      <ul id="formationsList">
        {resumeData.form.map((form) => (
          <li class="row formation text-left">
            <div class="col-3 text-left">
              <h4>{form.date}</h4>
              <h6>{form.school}</h6>
            </div>
            <div class="col-9 text-left">
              <h5>{form.title}</h5>
              <p>{form.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Form;
