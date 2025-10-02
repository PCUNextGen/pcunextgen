import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Events from './components/Events';
import Team from './components/Team';
import JoinUs from './components/JoinUs';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-light-primary text-text-light-primary dark:bg-dark-primary dark:text-text-dark-primary min-h-screen transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Events />
        <Team />
        <JoinUs />
      </main>
      <Footer />
    </div>
  );
}

export default App;
