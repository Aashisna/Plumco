import React from 'react';
import ReactDOM from 'react-dom/client';
import PL from './Footerlogo.png';
import one from './media1.jpg';
import two from './media2.jpg';
import three from './media3.jpg';
import four from './media4.jpg';
import five from './media5.jpg';
import six from './media6.jpg';
import seven from './media7.jpg';
import eight from './media8.jpg';
import twelve from './media12.jpg';
export default function Footer() {
    return (
        <>
            <section>
                <div className='footer details footer-responsive'>
                    <div className=' d-flex justify-content-around'>
                        <div className='row text-center py-5 container'>
                            <div className='col-lg-3 Ffirst'>
                                <img src={PL} height="70px" width="300px" className='image px-3' />
                                <p className='text-light py-3 contentfirst'>Management Plumbing includes a broad range of activities, and the many firms and their members often define these practices.</p>
                                <ul className='iconfooter'>
                                    <li><a href="https://plumco-react.wpocean.com/"><i className="bi bi-facebook fs-5 text-light fs1"></i></a></li>
                                    <li><a href="https://plumco-react.wpocean.com/"><i className="bi bi-twitter fs-5 text-light"></i></a></li>
                                    <li><a href="https://plumco-react.wpocean.com/"><i className="bi bi-instagram fs-5 text-light"></i></a></li>
                                    <li><a href="https://plumco-react.wpocean.com/"><i className="bi bi-google fs-5 text-light"></i></a></li>
                                </ul>
                            </div>
                            <div className='col-lg-3'>
                                <h2 className='text-light fs-4'>CONTACT</h2>
                                <ul className='fsecond'>
                                    <li className='footerfirstIcon'> <p className='firstIcon'><i className="bi bi-geo-fill fsecondicon"></i>7 Green Lake Street </p> <p className='px-3 pfirst'>Crawfordsville, IN </p><p className='pfirst px-3 '>47933</p></li>
                                    <li><p className='psecond'><i className="bi bi-telephone-outbound-fill fsecondicon"></i>+1 800 123 456 789</p></li>
                                    <li><p className='pthird'><i className="bi bi-cursor-fill fsecondicon"></i>Plumco@gmail.com</p></li>
                                </ul>
                            </div>
                            <div className='col-lg-2 fthird'>
                                <h2 className='text-light fs-4'>SERVICES</h2>
                                <ul>
                                    <li>< a href="#">Kitchen Plumbing</a></li>
                                    <li>< a href="#">Gas Line Services</a></li>
                                    <li>< a href="#">Water Line Repair</a></li>
                                    <li>< a href="#">Bathroom Plumbing</a></li>
                                    <li>< a href="#">Basement Plumbing</a></li>
                                </ul>
                            </div>
                            <div className='col-lg-4 ffourth'>
                                <h2 className='text-light ffourthh2 fs-4'>PROJECTS</h2>
                                <ul className='imagge'>
                                    <li><img src={seven} className='pe-1 py-2' /></li>
                                    <li><img src={eight} className='pe-1' /></li>
                                    <li><img src={twelve} className='pe-1' /></li>
                                    <li><img src={one} className='pe-1' /></li>
                                    <li><img src={two} className='pe-1' /></li>
                                    <li><img src={three} className='pe-1' /></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='footerbottom'>
                    <div className=' d-flex justify-content-around'>
                        <div className='row py-3 container'>
                        <p className='text-center fbp'>Copyright © 2022 Plumco by wpOceans. All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* <section>
                <div className='footers details footer-responsive'>
                    <div className=' d-flex justify-content-around'>
                        <div className='row text-center py-5 container'>
                            <div className='col-lg-3 Ffirst'>
                                <img src={PL} height="70px" width="300px" className='image px-3' />
                                <p className='text-light py-3'>Management Plumbing includes a broad range of activities, and the many firms and their members often define these practices.</p>
                                <ul>
                                    <li><a href="https://plumco-react.wpocean.com/"><i className="bi bi-facebook fs-5 text-light fs1"></i></a></li>
                                    <li><a href="https://plumco-react.wpocean.com/"><i className="bi bi-twitter fs-5 text-light"></i></a></li>
                                    <li><a href="https://plumco-react.wpocean.com/"><i className="bi bi-instagram fs-5 text-light"></i></a></li>
                                    <li><a href="https://plumco-react.wpocean.com/"><i className="bi bi-google fs-5 text-light"></i></a></li>
                                </ul>
                            </div>
                            <div className='col-lg-3'>
                                <h2 className='text-light fs-4'>CONTACT</h2>
                                <ul className='fsecond'>
                                    <li> <p><i className="bi bi-geo-fill fsecondicon"></i> Green Lake Street </p> <p className='px-3 pfirst'>Crawfordsville, IN </p><p className='pfirst px-3 '>47933</p></li>
                                    <li><p className='psecond'><i className="bi bi-telephone-outbound-fill fsecondicon"></i>+1 800 123 456 789</p></li>
                                    <li><p className='pthird'><i className="bi bi-cursor-fill fsecondicon"></i>Plumco@gmail.com</p></li>
                                </ul>
                            </div>
                            <div className='col-lg-2 fthird'>
                                <h2 className='text-light fs-4'>SERVICES</h2>
                                <ul>
                                    <li>< a href="#">Kitchen Plumbing</a></li>
                                    <li>< a href="#">Gas Line Services</a></li>
                                    <li>< a href="#">Water Line Repair</a></li>
                                    <li>< a href="#">Bathroom Plumbing</a></li>
                                    <li>< a href="#">Basement Plumbing</a></li>
                                </ul>
                            </div>
                            <div className='col-lg-4 ffourth'>
                                <h2 className='text-light ffourthh2 fs-4'>PROJECTS</h2>
                                <ul>
                                    <li><img src={seven} className='pe-1 py-2' /></li>
                                    <li><img src={eight} className='pe-1' /></li>
                                    <li><img src={twelve} className='pe-1' /></li>
                                    <li><img src={one} className='pe-1' /></li>
                                    <li><img src={two} className='pe-1' /></li>
                                    <li><img src={three} className='pe-1' /></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='footerbottoms'>
                    <div className=' d-flex justify-content-around'>
                        <div className='row py-3 container'>
                        <p className='text-center fbp'>Copyright © 2022 Plumco by wpOceans. All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </section> */}

        </>
    )
}