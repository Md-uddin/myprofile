import React from 'react'
import './styles/Project.css'
import projectjson from './objs/projectsjson'
import Rotate from 'react-reveal/Rotate';
import { NavLink, Link } from "react-router-dom";
const Project = () => {
  return (
    <div>
      <Rotate>
        <section className="project">
          <h1>Recent Work</h1>
          <div className="allprojects">
            {projectjson.map((project) => {
                const { id, src, title,link } = project;

              const img =   `./projects/project${id}.png`
              return (
                <div className="pr" key={id}>
                  <a href={link}>
                    {/* <img src="./icons/react.png" alt="" /> */}
                    <img src={img} alt="" />
                    </a>
                    <h2>
                      {id}.{title}
                    </h2>
                 
                </div>
              );
            })}
          </div>
        </section>
      </Rotate>
    </div>
  );
};
 
export default Project
// https://mduddin.website/
// http://project1.mduddin.website/