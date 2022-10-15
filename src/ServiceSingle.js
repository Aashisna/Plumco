import React from 'react';
import ReactDOM from 'react-dom/client';
import SS from './SingleService.jpg';
import Cat from './Cat';
import Cat1 from './Cat1';
import SS1 from './SingleService11.jpg';
import SS2 from './SingleService22.jpg';
export default function ServiceSingle() {
    return (
        <>
            <section className='aboutbanner'>
                <div className='aboutBackgroundContent'>
                    <div className='container'>
                        <h3>Kitchen Plumbing</h3>
                        <ul>
                            <li><a href='/home'>Home <span className='px-1'>/</span></a></li>
                            <li>Service</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className='d-flex justify-content-around container py-5'>
                <div className='topnav'>
                    <div className="search-container">
                        <form action="/action_page.php">
                            <input type="text" placeholder="Search Post.." name="search" />
                            <button type="submit"><i class="bi bi-search"></i></button>
                        </form>

                        <div className='py-5 singleservice'>
                            <h4 className='fs-2'>Services</h4>
                            <ul>
                                <li><a href="#">Kitchen Plumbing</a></li>
                                <li><a href="#">Gas Line Services</a></li>
                                <li><a href="#">Water Line Repair</a></li>
                                <li><a href="#">Bathroom Plumbing</a></li>
                                <li><a href="#">Basement Plumbing</a></li>
                                <li><a href="#">Remodeling Service</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="topnavimg">
                    <img src={SS} />
                </div>
            </section>

            <section>
                <div className='d-flex justify-content-around container'>
                    < div className="SSleft">
                        <h2 className='text-light'>How We Can Help You!</h2>
                        <p className='text-light'>labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                        <button><a href="/contact">Contact Us <span><i class="bi bi-arrow-right"></i></span></a></button>
                    </div>
                    <div className="SSRight">
                        <h2>Kitchen Plumbing Cleaning </h2>
                        <p>   {Cat.map((i) => (
                            <li className="list-group-item py-2 fs-6">{i.catName}
                            </li>
                        ))}</p>
                        <div className='d-flex justify-content-around pb-3'>
                            <img src={SS1} className="me-4" />
                            <img src={SS2} />
                        </div>
                        <p>   {Cat1.map((i) => (
                            <li className="list-group-item py-2 fs-6">{i.catName1}
                            </li>
                        ))}</p>

                        <div className='py-5'>
                            <h2 className='fs-3 fw-bold py-2 ps-3'>Frequently Asked Questions</h2>

                            <div class="accordion accordion-flush" id="accordionFlushExample">
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingOne">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                            Market research on our global panel with support from our exports
                                        </button>
                                    </h2>
                                    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">Kitchen Plumbing Cleaning

                                            Electronic typesetting rema essentially unchanged was popularised.

                                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.

                                            It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour,sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined.

                                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.

                                            It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour,sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined.
                                            Frequently Ask Questions

                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum exercitationem pariatur iure nemo esse repellendus est quo recusandae. Delectus, maxime.</div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingTwo">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                            Planning can help alleviate workplace stress and productivity.
                                        </button>
                                    </h2>
                                    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum exercitationem pariatur iure nemo esse repellendus est quo recusandae. Delectus, maxime.</div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingThree">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                            Those who experiment the most, are able to innovate the most
                                        </button>
                                    </h2>
                                    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum exercitationem pariatur iure nemo esse repellendus est quo recusandae. Delectus, maxime.</div>
                                    </div>
                                </div>

                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingFour">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                            Understand Your Problem,You most understand the most
                                        </button>
                                    </h2>
                                    <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum exercitationem pariatur iure nemo esse repellendus est quo recusandae. Delectus, maxime.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}