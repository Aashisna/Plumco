import React from 'react';
import ReactDOM from 'react-dom/client';
import HM2 from './HomeStyle2Banner.jpg';
import HS1 from './HomeStyle2image1.png';
import HS2 from './HomeStyle2image2.png';
import HS3 from './HomeStyle2image3.png';
import HS4 from './HomeStyle2image4.png';
import HS5 from './HomeStyle2image5.png';
import HS6 from './HomeStyle2image6.png';
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
import tm from './testimonials.jpg';
import tm1 from './testimonials1.jpg';
import HSI1 from './HomeStyle2icon1.PNG';
import HSI2 from './HomeStyle2icon2.PNG';
import HSI3 from './HomeStyle2icon3.PNG';
import Arrow from './Arrow.PNG';
function HomeStyle2() {
    const settings = {
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    }
    return (
        <>
            <section>
                <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img className="d-block w-100 HomeStyle2Banner" alt="..." />
                            <div class="carousel-caption d-none d-md-block slider">
                                <h2>Expert Plumbing Service You can Trust.</h2>
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                                <div className='thirdbutton'><a className='thirdbtn  btn' href='/contact'>Book Online</a></div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img className="d-block w-100 HomeStyle2Banner1" alt="..." />
                            <div class="carousel-caption d-none d-md-block slider">
                                <h2>Expert Plumbing Service You can Trust.</h2>
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
                                <div className='thirdbutton'><a className='thirdbtn btn' href='/contact'>Book Online</a></div>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </section>

            <section>
                <div className=' d-flex justify-content-around container py-5'>
                    <div className='row text-center py-4'>
                        <div className='HSI3'>
                       <img src={HSI3} className="fs-1"/>
                       <p className=" py-3">Book Online</p>
                       </div>
                    </div>
                    <img src={Arrow} className="arrow"/>
                    <div className='row text-center py-4'>
                    <div className='HSI2'>
                       <img src={HSI2} className="fs-1"/>
                       <p className=" py-3 text-light">Book Online</p>
                       </div>
                    </div>
                    <img src={Arrow} className="arrow"/>
                    <div className='row text-center py-4'>
                    <div className='HSI3'>
                       <img src={HSI3} className="fs-1"/>
                       <p className=" py-3">Book Online</p>
                       </div>
                    </div>
                </div>
            </section>

            <section>
                <div className=' d-flex justify-content-around'>
                    <div className='row text-center py-4 container'>
                        <h2 className='pt-5 fw-bold'>Best Service We Offer</h2>
                        <p className='py-3 para'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            has been the industry's standard dummy text ever since the 1500s.</p>
                    </div>
                </div>

            </section>

            <section>
                <div className=' d-flex justify-content-around container'>
                    <div className=' text-center py-2 container'>
                        <img src={HS1} />
                        <h5 className='pt-4 fw-bold'>Kitchen Plumbing</h5>
                        <p className='py-1'>Electronic typesetting rema essentially unchanged was popularised.</p>
                    </div>
                    <div className=' text-center py-2 container'>
                        <img src={HS2} />
                        <h5 className='pt-4 fw-bold'>Gas Line Services</h5>
                        <p className='py-1'>Electronic typesetting rema essentially unchanged was popularised.</p>
                    </div>
                    <div className=' text-center py-2 container'>
                        <img src={HS3} />
                        <h5 className='pt-4 fw-bold'>Water Line Repair</h5>
                        <p className='py-1'>Electronic typesetting rema essentially unchanged was popularised.</p>
                    </div>
                </div>

                <div className=' d-flex justify-content-around container py-5'>
                    <div className=' text-center py-2 container'>
                        <img src={HS4} />
                        <h5 className='pt-4 fw-bold'>Bathroom Plumbing</h5>
                        <p className='py-1'>Electronic typesetting rema essentially unchanged was popularised.</p>
                    </div>
                    <div className=' text-center py-2 container'>
                        <img src={HS5} />
                        <h5 className='pt-4 fw-bold'>Basement Plumbing</h5>
                        <p className='py-1'>Electronic typesetting rema essentially unchanged was popularised.</p>
                    </div>
                    <div className=' text-center py-2 container'>
                        <img src={HS6} />
                        <h5 className='pt-4 fw-bold'>Remodeling Service</h5>
                        <p className='py-1'>Electronic typesetting rema essentially unchanged was popularised.</p>
                    </div>
                </div>
            </section>

            <section>
                <div className=' d-flex justify-content-around'>
                    <div className='row text-center py-4 container'>
                        <h2>Best Service We Offer</h2>
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
                <div className=' d-flex justify-content-around pt-3'>
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
                <div className=' d-flex justify-content-around pb-1'>
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
                <div className='d-flex justify-content-around my-5'>
                    <div className='col-lg-6 onlinebooking'>
                        <div className=' d-flex justify-content-around'>
                            <div className='tm1'>
                                <img src={tm1} className="" />
                            </div>
                            <div className='title py-5 container'>
                                <form action="/action_page.php">
                                    <div className='d-flex justify-content-around container'>
                                        <span className=''>Online Booking</span></div>
                                    <div className='d-flex justify-content-around container'>
                                        <h2 className='py-3'>Online Booking For Appointments.</h2>
                                    </div>
                                    <div className='d-flex justify-content-around container'>
                                        <div className='form-group'>
                                            <label className='mb-2'>Full name here*</label>
                                            <input type='text' name='name' className='form control py-3 inputbackground' value='' placeholder='Your Name' required></input>
                                            <div className="errorMessage mb-3">The name field is required.</div>
                                        </div>
                                        <div className='form-group'>
                                            <label className='mb-2'>Email here*</label>
                                            <input type='text' name='name' className='form control py-3 inputbackground' value='' placeholder='Your Email' required></input>
                                            <div className="errorMessage">The email field is required.</div>
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-around container'>
                                        <div className='form-group'>
                                            <label className='mb-2 '>Contact Number*</label>
                                            <input type='text' name='name' className='form control py-3 inputbackground' value='' placeholder='Phone' required></input>
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
                                    <div className='thirdbutton'><a className='thirdbtn'>GET AN APPOINTMENT</a>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>

                    <div className='container-fluid'>
                        <div className='video-btn'>
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
export default HomeStyle2;