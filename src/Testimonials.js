import React from 'react';
import ReactDOM from 'react-dom/client';
import Slider from 'react-slick';
import sd1 from './SD1.jpg';
import sd2 from './SD2.jpg';
import sd3 from './SD3.jpg';
export default function Testimonials()
{
    const settings = {
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    }
return(

 <>
  <section className='aboutbanner'>
        <div className='aboutBackgroundContent'>
          <div className='container'>
            <h3>Testimonials</h3>
            <ul>
              <li><a href='/home'>Home <span className='px-1'>/</span></a></li>
              <li>Testimonials</li>
            </ul>
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
 <div className=' d-flex justify-content-around pb-5'>
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
</>
)}