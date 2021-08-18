import React from "react";
import "./styles/contact.css";
import Slide from 'react-reveal/Slide';
// import { useState } from "react";
// import { set } from "mongoose";
import axios from "axios";
const Contact = () => {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [description, setDescription] = useState("");
  // const user = {
  //   name: name,
  //   email: email,
  //   description: description,
  // };
  
  // const userdetails = (e) => {
  //   e.preventDefault();
  //   if (!name || !email) {
  //     alert("please enter a valid name and email");
  //   } else {
  //     setName("");
  //     setEmail("");
  //     setDescription("");

  //     axios
  //       .post("/myweb", user)
  //       .then((res) => {
  //         console.log(res);
  //         alert("thanks for regestering we will reach you in short");
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //         alert("unable to register");
  //       });
  //     console.log(name, email, description);
  //   }
  // };
  return (
    <div>
      <Slide left>
        <section className="contact" id="Contact">
          <h1>Get in touch </h1>
          <div className="contactform">
          
            <div className="output">
         
                <p>email :-</p>
              <a href="mailto:uddin@mduddin.website" target="_blank"  className="a"> <h2>uddin@mduddin.website</h2> </a><br />
              <a href="mailto:md@mduddin.website" target="_blank" className="a"> <h2>md@mduddin.website</h2> </a>
                <div className="media-icons">
                  <div className="lkd">
                    <a href="" target="_blank"></a>
                    <p>Linkdin</p>
                  </div>
                  <div className="git">
                    <a href="https://github.com/Md-uddin" target="_blank"></a>
                    <p>Git Hub</p>
                  </div>
                </div>
              </div>
            </div>
          {/* <div className="input">
              <form action="submit">
                <label>
                  name :
                  <input
                    type="text"
                    placeholder="  Good name "
                    name="name"
                    required
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </label>
                <br />
                <label>
                  email :
                  <input
                    type="email" required
                    placeholder="  example@gmail.com"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                  
                  <br />
                </label>

                <label>
                  Description :
                  <textarea
                    name="description"
                    id="description"
                    cols="30"
                    rows="10"
                    value={description}
                    onChange={(e) => {
                      setDescription(e.target.value);
                    }}
                  ></textarea>
                </label>
                <br />
                <button type="submit" onClick={userdetails}>
                  Submit
                </button>
              </form>
                  // </div>*/}
          
        </section>
      </Slide>
    </div>
  );
};

export default Contact;
