import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Porojects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Header/>
    <Hero/>
    <About/>
    <Projects/>
    <Resume/>
    <Contact />
    <Footer/>




  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

