import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import HomeStyle2 from './HomeStyle2';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import Service from './Service';
import ServiceStyle2 from './ServiceStyle2';
import ServiceSingle from './ServiceSingle';
import Cart from './Cart';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="homestyle2" element={<HomeStyle2 />} />
      <Route path="service" element={<Service />} />
      <Route path="servicestyle2" element={<ServiceStyle2 />} />
      <Route path="servicesingle" element={<ServiceSingle />} />
      <Route path="cart" element={<Cart/>} />
    </Routes>
    <Footer/>
  </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
