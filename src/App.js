import React from 'react';
import './App.css';
import About from './Sections/About';
import PastWork from './Sections/PastWork';
import Skills from './Sections/Skills';
import Contact from './Sections/Contact';
import Nav from './Navbar/Nav';
import Main from './Sections/Main';
import ScrollIndicator from './WebFun/ScrollIndicator';
import Footer from './Navbar/Footer';
import Testimonials from './Sections/Testimonials';
// import ThemeToggleButton from './WebFun/ThemeToggleButton';
// import ZindexSec from './Sections/z-index';




function App() {
  return (
    <>
    <div> <h1>Portfolio link</h1></div>
    <div className="App">
      <header className="App-header" id="home">
      <ScrollIndicator />
      <Nav />
      {/* <ThemeToggleButton /> */}
      </header>
      <>
      <section>
        <Main />
      </section>

        <section id="about">
          <About />
        </section>
        <section id="past-work">
          <PastWork />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section>
          <Testimonials />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </>
      {/* <section>
        <ZindexSec />
      </section> */}
      <footer>
        <Footer />
      </footer>
    </div>
    </>
  );
}

export default App;
