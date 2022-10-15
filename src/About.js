import React from 'react';
import ReactDOM from 'react-dom/client';
import Body from './Body';
import Abanner from './aboutBanner.jpg';
import AI from './Aboutimage.jpg';
import AS from './aboutsignature.png';
import Slider from 'react-slick';
import sd1 from './SD1.jpg';
import sd2 from './SD2.jpg';
import sd3 from './SD3.jpg';
import NB1 from './NewBlog1.jpg';
import NB2 from './NewBlog2.jpg';
import dm1 from './DM1.jpg';
import dm2 from './DM2.jpg';
import dm3 from './DM3.jpg';
import dm4 from './DM4.jpg';
import blue1 from './blue1.png';
import blue2 from './blue2.png';
import blue3 from './blue3.png';
import blue4 from './blue4.png';
import two from './media2.jpg';
import three from './media3.jpg';
import four from './media4.jpg';
import five from './media5.jpg';
import six from './media6.jpg';
function About() {
    const settings = {
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    }
    return (
        <>
            <section className='aboutbanner'>
                <div className='aboutBackgroundContent'>
                    <div className='container'>
                    <h3>About Us</h3>
                    <ul>
                        <li><a href='/home'>Home <span className='px-1'>/</span></a></li>
                        <li>About</li>
                    </ul>
                    </div>
                </div>
            </section>


            <section className='Abackground'>
                <div className="container">
                    <div className='d-flex justify-content-around'>
                        <div className='aboutimage '>
                            <img src={AI} className="px-5" />
                        </div>
                        <div className='px-3 aboutContent'>
                            <h2 className='abouth2'>Over 25+ Years Experience In Plumbing Service</h2>
                            <p className='pt-4'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections.</p>

                            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <div className='pt-4'>
                                <h4>Brubaker Nilka</h4>
                                <p>Vertex Chambers, CEO</p>
                            </div>
                            <div>
                                <img src={AS} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className=' d-flex justify-content-around'>
                    <div className='row text-center py-5 container'>
                        <h2 className='mt-4'>Best Service We Offer</h2>
                        <p className='py-3 para'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            has been the industry's standard dummy text ever since the 1500s.</p>
                    </div>
                </div>

            </section>

            <section>
                <div className=' d-flex justify-content-around container py-4'>
                    <div className='body '><img src={six} />
                        <h2 className='bodycontent'><a href="#">Kitchen Plumbing</a></h2>
                        <p className='bodycontent'>Electronic typesetting rema essentially unchanged was popularised.</p>
                        <a href="#" className='bodycontent'>READ MORE <i className="bi bi-chevron-double-right px-3"></i></a>
                    </div>
                    <div className='body '><img src={two} />
                        <h2 className='bodycontent'><a href="#">Gas Line Services</a></h2>
                        <p className='bodycontent'>Electronic typesetting rema essentially unchanged was popularised.</p>
                        <a href="#" className='bodycontent'>READ MORE <i className="bi bi-chevron-double-right px-3"></i></a></div>
                    <div className='body'><img src={three} />
                        <h2 className='bodycontent'><a href="#">Water Line Repair</a></h2>
                        <p className='bodycontent'>Electronic typesetting rema essentially unchanged was popularised.</p>
                        <a href="#" className='bodycontent'>READ MORE <i className="bi bi-chevron-double-right px-3"></i></a></div>
                </div>
                <div className=' d-flex justify-content-around container pb-5'>
                    <div className='body '><img src={four} />
                        <h2 className='bodycontent'><a href="#">Bathroom Plumbing</a></h2>
                        <p className='bodycontent'>Electronic typesetting rema essentially unchanged was popularised.</p>
                        <a href="#" className='bodycontent'>READ MORE <i className="bi bi-chevron-double-right px-3 fx-5"></i></a>
                    </div>
                    <div className='body'><img src={five} />
                        <h2 className='bodycontent'><a href="#">Basement Plumbing</a></h2>
                        <p className='bodycontent'>Electronic typesetting rema essentially unchanged was popularised.</p>
                        <a href="#" className='bodycontent'>READ MORE <i className="bi bi-chevron-double-right px-3"></i></a>
                    </div>
                    <div className='body '><img src={six} />
                        <h2 className='bodycontent'><a href="#">Remodelling Services</a></h2>
                        <p className='bodycontent'>Electronic typesetting rema essentially unchanged was popularised.</p>
                        <a href="#" className='bodycontent'>READ MORE <i className="bi bi-chevron-double-right px-3"></i></a>
                    </div>
                </div>
            </section>

            <section className='blue mt-5'>
                <div className=' d-flex justify-content-around container'>
                    <div className='Review'>
                        <div className='Reviews'>
                            <h3 className='text-light fs-2'>We Are Provide Always Different From Other Services.</h3>
                        </div>
                        <div className='customer-review d-flex justify-content-around container'>
                            <div>
                                <h2>89K</h2>
                            </div>
                            <div>
                                <ul className='customer-review-star'>
                                    <li><i className="bi bi-star-fill star"></i></li>
                                    <li><i className="bi bi-star-fill star"></i></li>
                                    <li><i className="bi bi-star-fill star"></i></li>
                                    <li><i className="bi bi-star-fill star"></i></li>
                                    <li><i className="bi bi-star st"></i></li>
                                </ul>
                                < h5 className='text-light CRtext'>Customer Review</h5>
                            </div>
                        </div>
                    </div>
                    <div className='customer-details py-5'>
                        <div className='customer-details1'>
                            <div className='d-flex justify-content-around '>
                                <div className='d-flex justify-content-around '>
                                    <div className='pe-4'>
                                        <img src={blue1} />
                                    </div>
                                    <div className='text-light details1'>
                                        <h2 className=''>200</h2>
                                        <h5 className='text-light details'>Running Projects</h5>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-around '>
                                    <div className='pe-4'>
                                        <img src={blue2} />
                                    </div>
                                    <div className='text-light details1'>
                                        <h2>85+</h2>
                                        <h5 className='text-light details'>Team Members</h5>
                                    </div>
                                </div>
                            </div>
                            <div className='d-flex justify-content-around py-5'>
                                <div className='d-flex justify-content-around '>
                                    <div className='pe-4'>
                                        <img src={blue3} />
                                    </div>
                                    <div className='text-light details1'>
                                        <h2>39K</h2>
                                        <h5 className='text-light details'>Happy Clients</h5>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-around '>
                                    <div className='pe-4'>
                                        <img src={blue4} />
                                    </div>
                                    <div className='text-light details1'>
                                        <h2>45+</h2>
                                        <h5 className='text-light details'>Award Winning</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='dedicatedmembers pt-4'>
                <div className=' d-flex justify-content-around'>
                    <div className='row text-center py-5 container'>
                        <h2>Dedicated Members</h2>
                        <p className='py-3 para'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            has been the industry's standard dummy text ever since the 1500s.</p>
                    </div>
                </div>
                <div className=' d-flex justify-content-around'>
                    <div className='row container'>
                        <div className='box col-lg-3 bg'>
                            <div className=' body11 img '><img src={dm1} />
                                <div className="icondisplay ">
                                    <p>
                                        <i className="bi bi-pinterest fa-1x display" aria-hidden="true"></i>
                                        <i className="bi bi-twitter fa-1x display"></i>
                                        <i className="bi bi-skype fa-1x display"></i>
                                    </p>
                                </div>
                            </div>
                            <div className='pb-2 b'>
                                <h5 className='pt-4 px-3'><a href="#">Henry Barton</a></h5>
                                <p className='px-3 '>Team Leader</p>
                            </div>
                        </div>
                        <div className='box col-lg-3 bg'>
                            <div className='body11 img'><img src={dm2} />
                                <div className="icondisplay">
                                    <p>
                                        <i className="bi bi-pinterest fa-1x display" aria-hidden="true"></i>
                                        <i className="bi bi-twitter fa-1x display"></i>
                                        <i className="bi bi-skype fa-1x display"></i>
                                    </p>
                                </div>
                            </div>
                            <div className='pb-2 b'>
                                <h5 className='pt-4 px-3'><a href="#">Mattie Washington</a></h5>
                                <p className='px-3 pb-3'>Junior Member</p>
                            </div>
                        </div>
                        <div className='box col-lg-3 bg'>
                            <div className='body11 img'><img src={dm3} />
                                <div className="icondisplay">
                                    <p>
                                        <i className="bi bi-pinterest fa-1x display" aria-hidden="true"></i>
                                        <i className="bi bi-twitter fa-1x display"></i>
                                        <i className="bi bi-skype fa-1x display"></i>
                                    </p>
                                </div>
                            </div>
                            <div className='pb-2 b'>
                                <h5 className='pt-4 px-3'><a href="#">Winifred Harmon</a></h5>
                                <p className='px-3 pb-3'>Team Leader</p>
                            </div>
                        </div>
                        <div className='box col-lg-3 bg'>
                            <div className='body11 img'><img src={dm4} />
                                <div className="icondisplay">
                                    <p>
                                        <i className="bi bi-pinterest fa-1x display" aria-hidden="true"></i>
                                        <i className="bi bi-twitter fa-1x display"></i>
                                        <i className="bi bi-skype fa-1x display"></i>
                                    </p>
                                </div>
                            </div>
                            <div className='pb-2 b'>
                                <h5 className='pt-4 px-3'><a href="#">Shelia Lawrence</a></h5>
                                <p className='px-3 pb-3'>Senior Member</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='peopleSay'>
                <div className=' d-flex justify-content-around'>
                    <div className='row text-center py-5 container'>
                        <h2>What People’s Say</h2>
                        <p className='py-3 para'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            has been the industry's standard dummy text ever since the 1500s.</p>
                    </div>
                </div>
            </section>

            <section>
                <div className=' d-flex justify-content-around'>
                    <div className='container Sslider'>
                        <div className='row'>
                            <Slider {...settings}>
                                <div className='col-lg-4'>
                                    <p className='SP'>There are many variations of passages the majiority has suffered
                                        alteration some form injected humor randomise word which don't look
                                        even slightly believable are going use a passage of need to be sure.</p>
                                    <div className='row'>
                                        <div className='col'>
                                            <img src={sd1} className='sdimage py-1' />
                                        </div>
                                        <div className='col'>
                                            <div className='row sdright'><h4>Ken Williamson</h4></div>
                                            <div className='row sdright'><h6>CEO & FOUNDER</h6></div>
                                        </div>
                                    </div>

                                </div>
                                <div className='col-lg-4'>
                                    <p className='SP'>There are many variations of passages the majiority has suffered
                                        alteration some form injected humor randomise word which don't look
                                        even slightly believable are going use a passage of need to be sure.</p>
                                    <div className='row'>
                                        <div className='col'>
                                            <img src={sd2} className='sdimage py-1' />
                                        </div>
                                        <div className='col'>
                                            <div className='row sdright'><h4>David Miller</h4></div>
                                            <div className='row sdright'><h6>CEO & FOUNDER</h6></div>
                                        </div>
                                    </div>

                                </div>
                                <div >
                                    <p className='SP'>There are many variations of passages the majiority has suffered
                                        alteration some form injected humor randomise word which don't look
                                        even slightly believable are going use a passage of need to be sure.</p>
                                    <div className='row'>
                                        <div className='col'>
                                            <img src={sd3} className='sdimage py-1' />
                                        </div>
                                        <div className='col'>
                                            <div className='row sdright'><h4>Robert  Williamson</h4></div>
                                            <div className='row sdright'><h6>CEO & FOUNDER</h6></div>
                                        </div>
                                    </div>

                                </div>
                                <div>
                                    <h3>4</h3>
                                </div>
                                <div>
                                    <h3 className='text dark'>5</h3>
                                </div>
                                <div>
                                    <h3 className='text dark'>6</h3>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className=' d-flex justify-content-around blast'>
                    <div className='container'>
                        <div className='row text-center py-5 container'>
                            <h2>Our Latest Project</h2>
                            <p className='py-3 para'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                has been the industry's standard dummy text ever since the 1500s.</p>
                        </div>
                        <div className='d-flex justify-content-around  py-3'>

                            <div className='newblog'><img src={NB1} />
                                <div className='bg-light'>
                                    <p className='pt-4 px-4'><a href="#" className='text-primary fs-6'>25 Sep 2022</a></p>
                                    <h2 className='px-4 pb-2'><a href="#" className='fs-4'>Making this the first true ones the uses a dictionary.</a></h2>
                                    <p className='px-4'>    Loura Sweety <span className='ps-2'>|</span> <a href="#" className='px-2'>35 Comments</a> <span className='pe-2'>|</span> 26 Share</p>
                                </div>
                            </div>
                            <div className='newblog'><img src={NB2} />
                                <div className='bg-light'>
                                    <p className='pt-4  px-4'><a href="#" className='text-primary fs-6'>23 Sep 2022</a></p>
                                    <h2 className='px-4 pb-2'><a href="#" className='fs-4'>A Behind the scenes look of your plumbing company</a></h2>
                                    <p className='px-4'> David Luis <span className='ps-2'>|</span> <a href="#" className='px-2'>80 Comments </a><span className='pe-2'>|</span> 45 Share</p>
                                </div>
                            </div>
                            <div className='newblog'><img src={NB1} />
                                <div className='bg-light'>
                                    <p className='pt-4 px-4'><a href="#" className='text-primary fs-6'>25 Sep 2022</a></p>
                                    <h2 className='px-4 pb-2'><a href="#" className='fs-4'>Making this the first true ones the uses a dictionary.</a></h2>
                                    <p className='px-4'>    Loura Sweety <span className='ps-2'>|</span> <a href="#" className='px-2'>35 Comments</a> <span className='pe-2'>|</span> 26 Share</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default About;