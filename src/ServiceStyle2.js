import React from 'react';
import ReactDOM from 'react-dom/client';
import HS1 from './HomeStyle2image1.png';
import HS2 from './HomeStyle2image2.png';
import HS3 from './HomeStyle2image3.png';
import HS4 from './HomeStyle2image4.png';
import HS5 from './HomeStyle2image5.png';
import HS6 from './HomeStyle2image6.png';

export default function ServiceStyle2(){
    return(
        <>
           <section className='aboutbanner'>
                <div className='aboutBackgroundContent'>
                    <div className='container'>
                    <h3> Our Service</h3>
                    <ul>
                        <li><a href='/home'>Home <span className='px-1'>/</span></a></li>
                        <li>About</li>
                    </ul>
                    </div>
                </div>
            </section>

            <section>
                <div className=' d-flex justify-content-around container py-5'>
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

        </>
    )
}