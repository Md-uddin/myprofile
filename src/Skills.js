import React from "react";
import "./styles/Skills.css";
import Skilljson from "./objs/Skils";
import skillname from "./objs/skillname";
const Skills = () => {
  return (
    <div>
      <section className="skills&exper">
        <div className="skills">
          <h1>
            <span>What </span> <span>i</span> <span>can do</span>
          </h1>
          {/* Charts  */}
          <div className="charts">
            {Skilljson.map((skil) => {
              const { icon, name, description } = skil;
              console.log(`./icons/${icon}`);
              return (
                <div className="box">
                  <img src={`./icons/${icon}`} alt="" />
                  <h1>{name}</h1>
                  <p>{description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* skills bar  */}
        <div className="skillcharts">
          <h1>skills progress</h1>
                  <div className="skillsbar">
                      <h1>Technical skills</h1>
            {skillname.map((items) => {
              const { name, width } = items;
              return (
                <div className="bar">
                  <span>{name}</span>
                  <div className="bgbar">
                    <div className="innerbar"></div>
                  </div>
                </div>
              );
            })}
                  </div>
                  <div className="skillchart">

                  </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
