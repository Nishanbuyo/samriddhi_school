import React from 'react';
import logo from './logo.svg';
import Header from './Header';
import Footer from './Footer';
import Slider from './Slider';
import MidLeft from './MidLeft';
import MidRight from './MidRight';
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import './App.css';
import { Tabs, Tab, Accordion, Card, Button, Carousel } from 'react-bootstrap';
import ContactUs from './ContactUs';

function App() {
  return (
    <div style={styles.container}>
      <Header />
      <Slider />
      <div style={styles.midSection}>
        <MidLeft />
        <MidRight />
      </div>
      <ContactUs />
      <Footer />
    </div>
  );
}

const styles = {
  container: {
    width: "100%",
  },

  midSection: {
    height: "500px",
    width: "100%",
    // lineHeight: "500px",
    textAlign: "center",
    borderBottom: "1px solid #bbb"
  },

}

export default App;
