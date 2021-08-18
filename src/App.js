import {
  BrowserRouter as Router, Switch,Route} from 'react-router-dom';

import './styles/Main.css';
import Main from './Main';
import Project from './Project';
import Skills from './Skills';
import Skillbar from './skillbar';
import Contact from './contact';
import Overlay from './overlay';
    //projects 
// import Project1 from './projects detail/project1/Project1';
// import Copyright from './copyright';



function App() {


  return (

    <Router>

      <Route path="/" exact component={Overlay}></Route>
              
      <Route path="/myweb" exact component={() => {
        return <Main />
            
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

      {/* <Route path="/myweb" exact component={() => {
        return <Copyright />
      }}></Route> */}
      {/* all projects  */}
      {/*
      <Route path="/myweb/project1" exact component={() => {
        return   <Project1 />
            
      }}></Route>

<Route path="/myweb/project2" exact component={() => {
        return   <Contact />
            
      }}></Route>
        <Route path="/myweb/project3" exact component={() => {
        return   <Main />
            
      }}></Route>
        <Route path="/myweb/project4" exact component={() => {
        return   <Skills />
            
      }}></Route>
  
     
    */}
        </Router>
  )

  
}
export default App;
