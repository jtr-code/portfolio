import About from "./components/About/About";
import Home from "./components/Home/Home";
import Project from "./components/Project/Project";
import Contact from './components/Contact/Contact';

function App() {
    return (
      <div className="app">
        <Home />
        <About />
        <Project />
        <Contact />
      </div>
    );
}

export default App;
