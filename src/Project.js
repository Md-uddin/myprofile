import React from 'react'
import './styles/Project.css'
import projectjson from './objs/projectsjson'
import Rotate from 'react-reveal/Rotate';
const Project = () => {
  
   
    return (
        <div>
           
            <Rotate>
            <section className='project'>
                <h1>Recent Work</h1>
                <div className="allprojects">
           {
        projectjson.map((project) => {
           
            const { id, src, title } = project;
            return (
               
                    <div className="pr" key={id} >
                      <img src="./icons/react.png" alt=""  />
                      <h2>{id}.{title}</h2>
                    </div>
                    
             
            )
        })
    }
                </div>
                </section>
                </Rotate>
         
            </div>
    )
}
 
export default Project
