import React from 'react';
import ReactDOM from 'react-dom/client';
import { Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import './plumo.css';
import PL from './plumco logo.png';
import W from './watch.png';
import P from './phone.png';
import LG1 from './logo1.PNG';

// window.onscroll = function () { Header() };
function Header() {
    // var header = document.getElementById("myHeader");
    // var sticky = header.offsetTop;

    // if (window.pageYOffset > sticky) {
    //     header.classList.add("sticky");
    // } else {
    //     header.classList.remove("sticky");
    // }
    return (
        <>
                <div className=' hfirst d-flex justify-content-between container-fluid m'>
                    <div className=' lg1 mx-5'>
                        <img src={LG1} />
                    </div>
                    <div className='btn'>
                        <a className="header-buy-now e-btn--3d -color-primary text-light mx-5" href="https://themeforest.net/checkout/from_item/39218613?license=regular&amp;support=bundle_6month">Buy now</a>
                    </div>
                </div>
                <div className='hsecond '>
                    <div className='d-flex justify-content-between container'>
                        <div className=' midleft'>
                            <div className=' text-light'><img src={W} height="35px" width="60px" className='image px-3 pt-1' /><span className='watch'>Sun - Fri || 8:00 - 7:00</span></div>
                        </div>
                        <div className=' midright'>
                            <div className='text-light '><img src={P} height="30px" width="60px" className='image px-3 phone' /> <span className='me-3 phonedigit'>+00 56 98 46</span> |
                                <select className="languages mx-3 my" id="languages">
                                    <option value="english">English</option>
                                    <option value="italy">Italy</option>
                                    <option value="spain">Spain</option>
                                    <option value="france">France</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='hthird n'>
                    <div className=' d-flex justify-content-around container'>
                        <div className='logo  py-2'> <img src={PL} height="70px" width="300px" className='image px-3' /></div>
                        <div className='navlist'>
                            <ul className='headlist'>
                                <li className='dropdown'><a href="/">Home</a>
                                    <ul className="dropdown-content my-4">
                                        <li><a className="text-dark" href="/">Home Style 1</a></li>
                                        <li><a className="text-dark" href="/homestyle2">Home Style 2</a></li>
                                        <li><a className="text-dark" href="/about">Home Style 3</a></li>
                                    </ul>
                                </li>

                                <li className='dropdown'><a href="/about">About</a>

                                </li>
                                <li className='dropdown'><a href='#'>Services</a>
                                    <ul className="dropdown-content my-4 mx-5 service">
                                        <li><a className="text-dark" href="/service">Service</a></li>
                                        <li><a className="text-dark" href="/servicestyle2">Service Style 2</a></li>
                                        <li><a className="text-dark" href="/servicesingle">Service Single</a></li>
                                    </ul>
                                </li>
                                <li className='dropdown'><a href="#">Shop</a>
                                    <ul className="dropdown-content my-4 mx-5 service">
                                        <li><a className="text-dark" href="/bike">Shop Page</a></li>
                                        <li><a className="text-dark" href="/bike">Shop Single</a></li>
                                        <li><a className="text-dark" href="/cart">Cart</a></li>
                                        <li><a className="text-dark">Check Out</a></li>
                                    </ul>
                                </li>
                                <li className='dropdown'><a href="#">Pages</a>
                                    <ul className="dropdown-content my-4 mx-5 service">
                                        <li><a className="text-dark" href="/bike">Project</a></li>
                                        <li><a className="text-dark" href="/bike">Project Single</a></li>
                                        <li><a className="text-dark" href="/bike">Team Single</a></li>
                                        <li><a className="text-dark">Appoinment</a></li>
                                        <li><a className="text-dark" href="/bike">Terms & Conditions</a></li>
                                        <li><a className="text-dark" href="/bike">Testimonials</a></li>
                                        <li><a className="text-dark" href="/bike">Pricing</a></li>
                                        <li><a className="text-dark">Error 400</a></li>
                                        <li><a className="text-dark" href="/bike">Login</a></li>
                                        <li><a className="text-dark">Register</a></li>
                                    </ul>
                                </li>
                                <li className='dropdown'><a href="#">Blog</a>
                                    <ul className="dropdown-content my-4 mx-5 blogs">
                                        <li><a className="text-dark" href="/bike">Blog right sidebar</a></li>
                                        <li><a className="text-dark" href="/bike">Blog left sidebar</a></li>
                                        <li><a className="text-dark" href="/bike">Blog fullwidth</a></li>
                                        <li><a className="text-dark">Blog details</a></li>
                                    </ul>
                                </li>
                                <li className='dropdown'><a href="/contact">Contact</a></li>
                            </ul>
                        </div>
                        <div className='thirdbutton'><a className='thirdbtn' href='/contact'>GETFREEQUOTE</a></div>
                    </div>
                </div>
                {/* <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
    </Routes> */}
        </>

        
    )
}
export default Header;