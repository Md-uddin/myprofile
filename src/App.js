import './styles/Main.css';
import Main from './Main';
import Project from './Project';
import Skills from './Skills';
import Skillbar from './skillbar';
import Contact from './contact';

function App() {

  return (
    <div className="App" >
      <Main />
      <Skills/>
      <Project />
      <Skillbar />
      <Contact/>
    </div>
  );
}

export default App;
