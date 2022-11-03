import React from 'react';
import ReactDOM from 'react-dom/client';
import BI from './bannerimage.png';
import one from './media1.jpg';
import two from './media2.jpg';
import three from './media3.jpg';
import four from './media4.jpg';
import five from './media5.jpg';
import six from './media6.jpg';
import seven from './media7.jpg';
import eight from './media8.jpg';
import nine from './media9.jpg';
import ten from './media10.jpg';
import eleven from './media11.jpg';
import twelve from './media12.jpg';
import dm1 from './DM1.jpg';
import dm2 from './DM2.jpg';
import dm3 from './DM3.jpg';
import dm4 from './DM4.jpg';
import tm from './testimonials.jpg';
import tm1 from './testimonials1.jpg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import sd1 from './SD1.jpg';
import sd2 from './SD2.jpg';
import sd3 from './SD3.jpg';
import NB1 from './NewBlog1.jpg';
import NB2 from './NewBlog2.jpg';
import NB3 from './NewBlog3.jpg';
import CP from './CommercialPumping.png';
import blue1 from './blue1.png';
import blue2 from './blue2.png';
import blue3 from './blue3.png';
import blue4 from './blue4.png';
function Body() {
    // var settings = {
    //     dots: true,
    //     infinite: false,
    //     speed: 500,
    //     slidesToShow: 3,
    //     slidesToScroll: 3,
    //     initialSlide: 0,
    //     responsive: [
    //       {
    //         breakpoint: 1024,
    //         settings: {
    //           slidesToShow: 3,
    //           slidesToScroll: 3,
    //           infinite: true,
    //           dots: true
    //         }
    //       },
    //       {
    //         breakpoint: 600,
    //         settings: {
    //           slidesToShow: 2,
    //           slidesToScroll: 2,
    //           initialSlide: 2
    //         }
    //       },
    //       {
    //         breakpoint: 480,
    //         settings: {
    //           slidesToShow: 1,
    //           slidesToScroll: 1
    //         }
    //       }
    //     ]
    // }
    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 3,
    //     slidesToScroll: 1
    // }
    const settings = {
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    }
    return (
        <div style={{overflow:'hidden'}}>

            <section className='banner'>
                <div className='d-flex justify-content-between container'>
                    <div className=' py-5 left '><p className='one py-4'>:: Highly Trained Staff</p>
                        <h1><p>Ready</p> <p className='honemiddle'>For</p> <p>You.</p></h1>
                        <p className='py-4 bannerPara'><p className='bannerPara'>We are certified company. We provide best</p> plumbing services for you & your company .</p>
                        <div className='d-flex justify-content-around container'>
                            <div className='thirdbutton'><a className='thirdbtn' href='/contact'>BOOK ONLINE</a>
                            </div>
                            <div className='bannerButton'>
                                <a href="https://youtu.be/GVKL4w7Wzu8?list=RDGVKL4w7Wzu8">
                                    <p className='bannerVideobutton1'><i className="bi bi-caret-right-fill fs-2 bannerVideobutton BVBicon my-3"></i></p></a>
                            </div>
                        </div>
                    </div>
                    <div className='right'><img src={BI} height="750px" className='py-3' /></div>
                </div>
            </section>

            <section >
                <div className=' d-flex justify-content-around container py-5 CP'>
                    <div className='text-center Commercialplumbing d-flex justify-content-between container'>
                        <div><img src={CP} className='py-2' /></div>
                        <div> <h2 className='py-3'>Commercial Plumbing</h2></div>
                    </div>
                    <div className='ResidentialPlumbing text-center d-flex justify-content-between container'>
                        <div><img src={CP} className='py-2' /></div>
                        <div><h2 className='py-3'>Residential Plumbing</h2></div>
                    </div>
                </div>
                <div className=' d-flex justify-content-around container py-2 CP'>
                <div className='ResidentialPlumbings text-center d-flex justify-content-between container'>
                        <div><img src={CP} className='py-2' /></div>
                        <div><h2 className='py-3'>Residential Plumbing</h2></div>
                        </div>
                    </div>
            </section>

            <section >
                <div className=' d-flex justify-content-around'>
                    <div className='row text-center py-4 container'>
                        <h2>Best Service We Offer</h2>
                        <p className='py-3 para'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            has been the industry's standard dummy text ever since the 1500s.</p>
                    </div>
                </div>

            </section>

            <section>
                <div className=' d-flex justify-content-around container py-4 details '>
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
                <div className=' d-flex justify-content-around container pb-5 details'>
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
                    <div className='body middleimage'><img src={six} />
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
                            <h3 className='text-light fs-2 w-100 fw-bold'>We Are Provide Always Different From Other Services.</h3>
                        </div>
                        <div className='customer-review d-flex justify-content-around container pt-5'>
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
            
            <section className='blues mt-5'>
                <div className=' container'>
                    <div className='Review '>
                        <div className='Reviews'>
                            <h3 className='text-light fs-2 Reviewspara'>We Are Provide Always Different From Other Services.</h3>
                        </div>
                        <div className='customer-review container d-flex justify-content-around'>
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

            <section>
                <div className=' d-flex justify-content-around'>
                    <div className='row text-center py-5 container'>
                        <h2>Our Latest Project</h2>
                        <p className='py-3 para'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            has been the industry's standard dummy text ever since the 1500s.</p>
                    </div>
                </div>
            </section>

            <section className='container'>
                <div className=' d-flex justify-content-around pt-3 details'>
                    <div className='body1 px-3'><img src={twelve} />
                        <h3>Water Line Repair</h3>
                        <p>Plumbing</p>
                    </div>
                    <div className='body1 px-3'><img src={seven} />
                        <h3>Basement Plumbing</h3>
                        <p>Plumbing</p>
                    </div>
                    <div className='body1 px-3'><img src={eight} />
                        <h3>Remodelling Service</h3>
                        <p>Plumbing</p>
                    </div>
                </div>
                <div className=' d-flex justify-content-around pb-1 details'>
                    <div className='px-3 body1'><img src={nine} />
                        <h3 className=''>Water Line Repair</h3>
                        <p>Plumbing</p>
                    </div>
                    <div className='px-3 body1'><img src={ten} />
                        <h3>Kitchen Plumbing</h3>
                        <p>Plumbing</p>
                    </div>
                    <div className='px-3 body1'><img src={eleven} />
                        <h3>Gas Line Services</h3>
                        <p>Plumbing</p>
                    </div>
                </div>
                <div className='thirdbuttons'><a className='thirdbtns' href='/contact'>View All Projects</a>
                </div>
            </section >
            
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
                <div className='d-flex justify-content-around my-5 details'>
                    <div className='col-lg-6 onlinebooking'>
                        <div className=' d-flex justify-content-around'>
                            <div className='tm1'>
                                <img src={tm1}/>
                            </div>
                            <div className='title py-5 container'>
                            {/* <form action="/action_page.php"> */}
                                <div className='d-flex justify-content-around container'>
                                    <span className=''>Online Booking</span></div>
                                    <div className='d-flex justify-content-around container'>
                                    <h2 className='py-3'>Online Booking For Appointments.</h2>
                                </div>
                                <form action="/action_page.php">
                                    <div className='d-flex justify-content-around container'>
                                        <div className='form-group'>
                                            <label className='mb-2'>Full name here*</label>
                                            <input type='text' name='name' className='form control py-3 inputbackground'  placeholder='Your Name' required></input>
                                            <div className="errorMessage mb-3">The name field is required.</div>
                                        </div>
                                        <div className='form-group'>
                                            <label className='mb-2'>Email here*</label>
                                            <input type='text' name='name' className='form control py-3 inputbackground' placeholder='Your Email' required></input>
                                            <div className="errorMessage">The email field is required.</div>
                                        </div>
                                    </div>
                                <div className='d-flex justify-content-around container'>
                                    <div className='form-group'>
                                        <label className='mb-2 '>Contact Number*</label>
                                        <input type='text' name='name' className='form control py-3 inputbackground' placeholder='Phone' required></input>
                                        <div className="errorMessage">The phone field is required.</div>
                                    </div>
                                    <div className='form-group form-group-4'>
                                        <label className='mb-2 ms-3'>Select service*</label>
                                        <select className='form-control py-3 inputbackground form-group-4-text' type='text' name='subject'>
                                            <option value='0' className='py-2 '>Choose a Service </option>
                                            <option>Kitchen plumbning</option>
                                            <option>Gas Line Services</option>
                                            <option>Water Line Repair</option>
                                            <option>Bathroom Plumbing</option>
                                            <option>Basement Plumbing</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-around container'>
                                    <textarea placeholder='Message' rows={6} className='form-control mt-3 inputbackground'></textarea>
                                </div>
                                <div className="errorMessage selectError">The subject field is required.</div>
                                <div className=''>
                                <button className='btn btn-primary thirdbutton thirdbtn form-buttons' type='submit'>GET AN APPOINTMENT</button>
                            </div>
                            </form>
                            </div>

                        </div>
                    </div>

                    <div className='container-fluid'>
                        <div className='video-btn'style={{height:'100%'}}>
                        <a href="https://youtu.be/GVKL4w7Wzu8?list=RDGVKL4w7Wzu8">
                       <p className='bannerVideobutton1s'> <i className="bi bi-caret-right-fill fs-2 bannerVideobuttons"></i></p></a>
                            <img src={tm} />
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

            <section className='peopleSay'>
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

            <section className=''>
                <div className=' d-flex justify-content-around blast'>
                    <div className='container'>
                        <div className='row text-center py-5 container'>
                            <h2>Our Latest Project</h2>
                            <p className='py-3 para'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                has been the industry's standard dummy text ever since the 1500s.</p>
                        </div>
                        <div className='d-flex justify-content-around  py-3 details'>

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
        </div>
    )
}
export default Body;