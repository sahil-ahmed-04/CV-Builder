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
import Border from "./Components/Border"

function App() {
  return (
    <div className="App">
      <Border><Introduction intro={initialResumeData.personalInfo}></Introduction></Border>
      <Border><Education education={initialResumeData.education}></Education></Border>
      <Border><Experience experience={initialResumeData.experience} /></Border>
      <Border><Skills skills={initialResumeData.skills} /></Border>
    </div>
  );
}

export default App;
