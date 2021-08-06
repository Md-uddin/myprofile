import React from "react";
import "./styles/Skills.css";
import Skilljson from "./objs/Skils";
import Fade from 'react-reveal/Fade';

const Skills = () => {  
  return (
    <div>
      <Fade left>
      <section className="skills&exper">
        <div className="skills">
          <h1>
            What i can do
          </h1>
          <div className="icon-box">
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
        </Fade>
    </div>
  );
};

export default Skills;
