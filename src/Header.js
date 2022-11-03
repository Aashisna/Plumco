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
            <div className=' hfirst d-flex justify-content-between container-fluid n1'>
                <div className=' lg1 mx-5'>
                    <img src={LG1} />
                </div>
                <div className='btn'>
                    <a className="header-buy-now e-btn--3d -color-primary text-light mx-5" href="https://themeforest.net/checkout/from_item/39218613?license=regular&amp;support=bundle_6month">Buy now</a>
                </div>
            </div>
            <div className='hsecond n2'>
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
            <div className='hthird n3'>
                <div className='d-flex justify-content-around container'>
                    <nav class="navbar navbar-dark bg-primary">
                        <div class="container-fluid">
                            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="offcanvas offcanvas-start text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                                <div class="offcanvas-header">
                                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                </div>
                                <div class="offcanvas-body bgtoggler">
                                    <ul class="navbar-nav flex-grow-1 pe-3">
                                    <li class="nav-item dropdown">
                                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Home
                                            </a>
                                            <ul class="dropdown-menu dropdown-menu-dark">
                                                <li><a class="dropdown-item" href="/">Home Style 1</a></li>
                                                <li><a class="dropdown-item" href="/homestyle2">Home Style 2</a></li>
                                                <li><a class="dropdown-item" href="/about">Home Style 3</a></li>
                                                <li>
                                                    <hr class="dropdown-divider" />
                                                </li>
                                            </ul> 
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#">About</a>
                                        </li>
                                        <li class="nav-item dropdown">
                                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Sevices
                                            </a>
                                            <ul class="dropdown-menu dropdown-menu-dark">
                                                <li><a class="dropdown-item" href="/service">Service</a></li>
                                                <li><a class="dropdown-item" href="/servicestyle2">Service Style2</a></li>
                                                <li><a class="dropdown-item" href="/servicesingle">Single Service</a></li>
                                                <li>
                                                    <hr class="dropdown-divider" />
                                                </li>
                                            </ul> 
                                        </li>
                                        <li class="nav-item dropdown">
                                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Shop
                                            </a>
                                            <ul class="dropdown-menu dropdown-menu-dark">
                                                <li><a class="dropdown-item" href="#">Shop Page</a></li>
                                                <li><a class="dropdown-item" href="#">Shop Single</a></li>
                                                <li><a class="dropdown-item" href="#">Cart</a></li>
                                                <li><a class="dropdown-item" href="#">Check Out</a></li>
                                                <li>
                                                    <hr class="dropdown-divider" />
                                                </li>
                                            </ul> 
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#">Pages</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#">Blogs</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#">Contacts</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </nav>
                    <div className='logo  py-2'> <img src={PL} height="70px" width="300px" className='image px-3' /></div>
                    <div className='navlist'>
                        <ul className='headlist'>
                            <li className='dropdown'><a href="/">Home</a>
                                <ul className="dropdown-content">
                                    <li><a className="text-dark first" href="/">Home Style 1</a></li>
                                    <li><a className="text-dark" href="/homestyle2">Home Style 2</a></li>
                                    <li><a className="text-dark last" href="/about">Home Style 3</a></li>
                                </ul>
                            </li>

                            <li className='dropdown'><a href="/about">About</a>

                            </li>
                            <li className='dropdown'><a href='#'>Services</a>
                                <ul className="dropdown-content services">
                                    <li><a className="text-dark first" href="/service">Service</a></li>
                                    <li><a className="text-dark" href="/servicestyle2">Service Style 2</a></li>
                                    <li><a className="text-dark last" href="/servicesingle">Service Single</a></li>
                                </ul>
                            </li>
                            <li className='dropdown'><a href="#">Shop</a>
                                <ul className="dropdown-content  shop">
                                    <li><a className="text-dark first" href="/shoppage">Shop Page</a></li>
                                    <li><a className="text-dark" href="/shopsingle">Shop Single</a></li>
                                    <li><a className="text-dark" href="/cart">Cart</a></li>
                                    <li><a className="text-dark last">Check Out</a></li>
                                </ul>
                            </li>
                            <li className='dropdown'><a href="#">Pages</a>
                                <ul className="dropdown-content pages">
                                    <li><a className="text-dark first" href="/bike">Project</a></li>
                                    <li><a className="text-dark" href="/bike">Project Single</a></li>
                                    <li><a className="text-dark" href="/bike">Team Single</a></li>
                                    <li><a className="text-dark" href="/bike">Appoinment</a></li>
                                    <li><a className="text-dark" href="/bike">Terms & Conditions</a></li>
                                    <li><a className="text-dark" href="/testimonials">Testimonials</a></li>
                                    <li><a className="text-dark" href="/pricing">Pricing</a></li>
                                    <li><a className="text-dark" href="/error">Error 400</a></li>
                                    <li><a className="text-dark" href="/signin">Login</a></li>
                                    <li><a className="text-dark last"  href="/signup">Register</a></li>
                                </ul>
                            </li>
                            <li className='dropdown'><a href="#">Blog</a>
                                <ul className="dropdown-content  blogs">
                                    <li><a className="text-dark first" href="/bike">Blog right sidebar</a></li>
                                    <li><a className="text-dark" href="/bike">Blog left sidebar</a></li>
                                    <li><a className="text-dark" href="/bike">Blog fullwidth</a></li>
                                    <li><a className="text-dark last" href="/blogdetails">Blog details</a></li>
                                </ul>
                            </li>
                            <li className='dropdown'><a href="/contact">Contact</a></li>
                        </ul>
                    </div>
                    <div className='thirdbutton'><a className='thirdbtn' href='/contact'>GETFREEQUOTE</a></div>
                    <div className='topnavs '>
                        <div className='search-containers'>
                            <button type="submit"><a href=""><i className="bi bi-search"></i></a></button>
                        </div>
                    </div>
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