import React from "react";
import Zoom from 'react-reveal/Zoom';


const Main = () => {
  return ( 
    <div>
      <Zoom>
      <section className ="main">
        <div className ="main-div">
          <div className ="main-content">
            <a href="#Contact">i'm mdUddin</a>
            <h1> i'm a fullstack developer ...</h1>
            <p>
            An individual freelancer works for both short-term and long-term projects intending to satisfy and fulfill the expectation of the clients.As my priority is client satisfaction you can test my skills before hiring without hesitation. feel free to contact me as I can convert your existing  potential plan to reality 
            </p>
              
            </div>
           
              <a  className="main-btn" href="#Contact">Connect with me</a>
        <div className="main-image"></div>
          </div>
      
          </section>
          </Zoom>
    </div>
  );
};

export default Main;
