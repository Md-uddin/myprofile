import React from "react";
import "./styles/contact.css";
const Contact = () => {
  return (
    <div>
      <section className="contact">
        <h1>Get in touch </h1>
        <div className="contactform">
          <div className="overlay">
            <div className="output">
              <p>email :-</p>
              <h2>example@gmail.com</h2>
              <div className="lkd"></div>
              <div className="git"></div>
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
                {" "}
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
    </div>
  );
};

export default Contact;
