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
import ShopPage from './ShopPage';
import Testimonials from './Testimonials';
import Error from './Error';
import SignIn from './SignIn';
import Forgot from './Forgot';
import Signup from './Signup';
import Pricing from './Pricing';
import ShopSingle from './ShopSingle';
import BlogDetails from './BlogDetails';

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
      <Route path="shoppage" element={<ShopPage/>} />
      <Route path="testimonials" element={<Testimonials/>} />
      <Route path="error" element={<Error/>} />
      <Route path="signin" element={<SignIn/>} />
      <Route path="forgot" element={<Forgot/>} />
      <Route path="signup" element={<Signup/>} />
      <Route path="pricing" element={<Pricing/>} />
      <Route path="shopsingle" element={<ShopSingle/>} />
      <Route path="blogdetails" element={<BlogDetails/>} />
    </Routes>
    <Footer/>
  </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
