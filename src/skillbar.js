import React from 'react';
import './styles/skillbar.css'
import skillname from "./objs/skillname";

const Skillbar = () => {

  
    return (
        <div>
       
    

        {/* skills bar  */}
        <div className="skillcharts" id="skills" >
          <h1 className="top">skills progress</h1>
          <div className="skillsbar">
            {skillname.map((items) => {
              const { name, score } = items;
              
              return (
                <div className="bar" key={score}>
                  <span>{name}</span>
                  <div className="bgbar">
                    <div
                      className="innerbar"
                      style={{ width: `${score}` }}
                    ></div>
                  </div>
                </div>
              );
            })}
            ;<h1>Technical skills</h1>
          </div>
          <div className="skillchart"></div>
            </div>
            

        </div>
    )
}

export default Skillbar
