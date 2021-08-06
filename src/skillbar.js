import React from "react";
import "./styles/skillbar.css";
import skillname from "./objs/skillname";
import Skillchart from "./objs/skillchart";
import Wobble from 'react-reveal/Wobble';
const Skillbar = () => {
  return (


    <div className="skillcharts">
     
      <Wobble>
      <div className="skillchart" id="skills">
        <h1 className="top">Skills  & Progress</h1>
        <div className="skillsbar">
          {skillname.map((items) => {
            const { name, score } = items;

            return (
              <div className="bar" key={score}>
                <span>{name}</span>
                <div className="bgbar">
                  <div className="innerbar" style={{ width: `${score}` }}></div>
                </div>
              </div>
            );
          })}
          ;<h1>Technical skills</h1>
        </div>
      </div>
      <div className="skillscircle">
          {Skillchart.map((circle) => {
         
            let innerstyle;
          
            const innerlargestyle = {
              strokeDashoffset: `calc(450 - ( 450 * ${ circle.percent }) / 100 )`,
              cy: "100", cx: "100", r: "90"
            }

            const innerSmallStyle = {
              strokeDashoffset: `calc(380 - ( 380 * ${ circle.percent }) / 100 )`,
              cy: "63", cx: "65", r: "60"
            }
            if (window.innerWidth < 1650) {
            console.log('inner small style')
              innerstyle=innerSmallStyle
            } else  {
            innerstyle = innerlargestyle;
            console.log('inner large style')
            }
          
           
   
          console.log (innerstyle)
            
                
              
            
                
            return(
            
            <div className="box" key={circle.id}>
            <div className="circles">
              <svg>
                 <circle className="outercircle" style={innerstyle}></circle>
                    <circle className="innercircle"  style={innerstyle}></circle> 
                    
             
              </svg>
                <span> {circle.percent + "%"} </span>
            </div>
              <h2>{circle.skill}</h2>
              </div>
    
     
        )})}
        <h1 className="h1">Professional Skills</h1>
        </div>
        </Wobble>
    
    </div>
  );
};

export default Skillbar;
