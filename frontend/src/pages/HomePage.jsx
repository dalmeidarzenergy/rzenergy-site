import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import WhyUs from '../components/WhyUs';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const HomePage = () => (
  <div className="App bg-[#fbf4ea] min-h-screen">
    <Header />
    <main>
      <Hero />
      <About />
      <WhyUs />
      <Contact />
    </main>
    <Footer />
  </div>
);

export default HomePage;
