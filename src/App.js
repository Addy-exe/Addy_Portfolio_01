import { useContext, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import './index.css';
import { ThemeContext } from './Context/Context';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Aos from 'aos';


function App() {

  const theme = useContext(ThemeContext);
  const darkmode = theme.state.darkmode;

  useEffect(() => {
    Aos.init();
  }, [])

  return (
      <div
        style={{
          background: darkmode ? '#0b0c10' : '',
          color: darkmode ? '#fff' : '',
        }}
      >
        <Navbar />
        <Home />
        <Skills />
        <Projects />
        <Contact />
      </div>
  );
}

export default App;
