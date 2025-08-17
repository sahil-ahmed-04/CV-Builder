import './App.css';
import "./Components/Education"
import Education from './Components/Education';
import "./Components/Experience"
import Experience from './Components/Experience';
import "./Components/Introduction"
import Introduction from './Components/Introduction';
import "./Components/Projects"
import "./Components/Skills"
import Skills from './Components/Skills';
import { initialResumeData } from './Data/data';

function App() {
  return (
    <div className="App">
      <Introduction intro={initialResumeData.personalInfo}></Introduction>
      <Education education={initialResumeData.education}></Education>
      <Experience experience={initialResumeData.experience} />
      <Skills skills={initialResumeData.skills} />
    </div>
  );
}

export default App;
