import './App.css';
import "./Components/Education"
import Education from './Components/Education';
import "./Components/Experience"
import "./Components/Introduction"
import Introduction from './Components/Introduction';
import "./Components/Projects"
import "./Components/Skills"

function App() {
  return (
    <div className="App">
      <Introduction name="Sahil Ahmed" email="Sahilahmed04042003@gmail.com" mobile={9936059852}></Introduction>
      <Education></Education>
    </div>
  );
}

export default App;
