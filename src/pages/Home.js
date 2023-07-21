import React from 'react';
import '../App.css';
import Introduction from '../containers/Introduction';
import About from '../containers/About';
import Skills from '../containers/Skills';
import Footer from '../containers/Footer';

function Home() {
    return (
        <>
            <Introduction />
            <About />
            <Skills />
            <Footer />
        </>
        
    );
  }
  
  export default Home;