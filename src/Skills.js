import React from "react";
import "./styles/Skills.css";
import Skilljson from "./objs/Skils";

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
            
              const { icon, name, description,id } = skil;
          
              return (
                <div className="box" key={id}>
                  <img src={`./icons/${icon}`} alt="" />
                  <h1>{name}</h1>
                  <p>{description}</p>
                </div>
              );
            })
            }
          </div>
        </div>

  
      </section>
    </div>
  );
};

export default Skills;
