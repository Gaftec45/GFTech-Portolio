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
// import ZindexSec from './Sections/z-index';



function App() {
  return (
    <div className="App">
      <header className="App-header" id="home">
      <Nav />
      <ScrollIndicator />
      </header>
      <>
        <Main />
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
  );
}

export default App;
