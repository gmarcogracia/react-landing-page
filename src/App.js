
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Analytics from './components/Analytics';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <div>
    <Navbar/>

 
    <Analytics/>
    <Hero></Hero>
    <Newsletter/>
    <Footer/>
    
    </div>
  );
}

export default App;
