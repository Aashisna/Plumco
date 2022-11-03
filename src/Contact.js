import React from 'react';
import ReactDOM from 'react-dom/client';
import Body from './Body';
function Contact() {
    return (
        <>

            <section className='aboutbanner mb-5'>
                <div className='aboutBackgroundContent'>
                    <div className='container'>
                        <h3>Contact Us</h3>
                        <ul>
                            <li><a href='/home'>Home <span className='px-1'>/</span></a></li>
                            <li>About</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className='d-flex justify-content-around container'>
                <div className='text-center contactpage'>
                    <p><i className="bi bi-geo-alt-fill fs-3 Cicon"></i></p>
                    <h2 className='pt-3'>Address</h2>
                    <p className='pt-2'>7 Green Lake Street Crawfordsville,</p>
                    <p className='p1'>IN 47933</p>
                </div>

                <div className='text-center contactpage'>
                    <p><i className="bi bi-envelope-paper fs-3 Cicon"></i></p>
                    <h2 className='pt-3'>Email Us</h2>
                    <p className='pt-2'>Plumco@gmail.com</p>
                    <p className='p1'>helloyou@gmail.com</p>
                </div>

                <div className='text-center contactpage'>
                    <p><i className="bi bi-telephone-inbound fs-3 Cicon"></i></p>
                    <h2 className='pt-3'>Call Now</h2>
                    <p className='pt-2'>+1 800 123 456 789</p>
                    <p className='p1'>+1 800 123 654 987</p>
                </div>
            </section>

            <section className='container'>
                <div className=' d-flex justify-content-around'>
                    <div className='row text-center py-5 container'>
                        <h2>Have Any Question?</h2>
                        <p className='py-3 para'>It is a long established fact that a reader will be distracted content of a page when looking.</p>
                    </div>
                </div>
            </section>

            <section>
                <div className='container'>
                    <div className='contactForm'>
                        <form action="/action_page.php" >

                            <div className='d-flex justify-content-start'>
                                <input type="text" placeholder='Your Name' required className='py-2 pe-5 me-4 my-3 ps-2'></input>
                                <input type="text" placeholder='Email' required className='py-2 pe-5 me-4 my-3 ps-2'></input>
                            </div>
                            <div className='d-flex justify-content-start'>
                                <input type="text" placeholder='Phone' required className='py-2 pe-5 me-4 my-3 ps-2'></input>

                                <div>
                                    <select id="disabledSelect" className='form-select my-3 Contactoption'>
                                        <option className='px-5 '>Choose a Service</option>
                                        <option>Gas Line services</option>
                                        <option>Water Line Repair</option>
                                        <option>Basement Plumbing</option>
                                        <option>Residential Plumbing</option>
                                    </select>
                                </div>
                            </div>

                            <div className='d-flex justify-content-start py-4'>
                                <textarea rows='5' cols='56'></textarea>
                            </div>
                            <button className='btn btn-primary contactbutton' type='submit'>Submit Now</button>
                        </form>
                    </div>
                </div>
            </section>
            
            <section>
                <div><iframe className='iframe' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d193595.66904233702!2d-73.979681!3d40.69748800000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1665211065404!5m2!1sen!2sbd" width="100%" height="450"></iframe></div>
            </section>
        </>
    )
}
export default Contact;