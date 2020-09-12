import React from 'react';
import logo from './image1.jpg';
import image from './image2.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <nav >
            <a href="https://vyorius.com/"><img src={logo} className="App-logo" alt="logo" height="40px" /></a>
            <a href="https://vyorius.com/" className="company-name" >VYORIUS</a>
            <a className="a1" href="https://vyorius.com/whyVyorius">Why Vyorius?</a>
            <a className="a1" href="https://vyorius.com/solution/dataSync">Solutions</a>
            <a className="a1" href="https://vyorius.com/product/intro">Product</a>
            <a className="a1" href="https://vyorius.com/useCases/energy">Use Cases</a>
            <a className="a1" href="https://vyorius.com/team">Team</a>
            <a className="a1" href="https://vyorius.com/OurPartners">Partners</a>
            <a className="a1" href="https://vyorius.com/contact">Contact Us</a>
            <a href="https://vyorius.com/" className="navright company-name">Launch Vyoris ></a>
          </nav>
      </header>
      <body className="content">
        <div >
        <img src={image} className="Bodyimage" height="300px"/>
        <p className="orange1 orange">CONECTING THE DISCONNECTED</p>
        <div className="heading"><p className="orange hp">Vyorius</p><p className="hp"> brings unmanned robots</p><p className="orange hp"> together</p><p className="hp">, wherever they are</p></div>
        <p className="para">With all of the operations, commanding and maintenance tools in one place, unmanned vehicles will stay connected and productive no matter where you’re Delivering</p>
        </div>
        <div className="bodybtn">
        <a href="https://vyorius.com/" className="tryvyorius btn1">Try Vyorius</a>
        <a href="https://vyorius.com/#page2" className="learnmore btn1">Learn More</a>
        </div>
        <div className="endline">
          <p>Need to order a delivery?
            <a className="a1" href="">Get Started</a>
          </p>
        </div>
      </body>
    </div>
  );
}

export default App;
