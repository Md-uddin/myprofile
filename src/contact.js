import React from "react";
import "./styles/contact.css";
import Slide from 'react-reveal/Slide';
const Contact = () => {
  return (
    <div>

      <Slide left>
      <section className="contact" id ="Contact">
        <h1>Get in touch </h1>
        <div className="contactform">
          <div className="overlay">
            <div className="output">
              <p>email :-</p>
                <h2>mdu135687@gmail.com</h2>
                <div className="media-icons">
                  <div className="lkd">
                    <a href="" target="_blank"></a>
                    <p>Linkdin</p>
              </div>
                  <div className="git">
                    <a href="" target="_blank"></a>
                    <p>Git Hub</p>
                  </div>
                  </div>
            </div>
          </div>
          <div className="input">
            <form action="submit">
              <label>
                name :
                <input type="text" placeholder="  Good name " />
              </label>
              <br />
              <label>
                email :
                <input type="email" placeholder="  example@gmail.com" />
                <br />
              </label>

              <label>

                Description :
                <textarea
                  name="description"
                  id="description"
                  cols="30"
                  rows="10"
                ></textarea>
              </label>
              <br />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
        </section>
        </Slide>
     
     
    </div>
  );
};

export default Contact;
