import {
  BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import { useState,useEffect } from 'react';
import './styles/Main.css';
import Main from './Main';
import Project from './Project';
import Skills from './Skills';
import Skillbar from './skillbar';
import Contact from './contact';
import Overlay from './overlay';
import Copyright from './copyright';



function App() {
  const [ overlay, setOverlay ] = useState("true");

  return (

    <Router>

      <Route path="/" exact component={Overlay}></Route>
              
      <Route path="/myweb" exact component={() => {
        return   <Main />
            
      }}></Route>
      <Route path="/myweb" exact component={() => {
        return <Skills />
      }}></Route>
              
      <Route path="/myweb" exact component={() => {
          return <Project />
        
      }}></Route>
 <Route path="/myweb" exact component={() => {
        return <Skillbar />
      }}></Route>

<Route path="/myweb" exact component={() => {
        return <Contact />
      }}></Route>

<Route path="/myweb" exact component={() => {
        return <Copyright />
      }}></Route>
    </Router>
     
    
  );

  
}
export default App;
