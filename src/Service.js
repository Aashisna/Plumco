import React from 'react';
import ReactDOM from 'react-dom/client';
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
export default function Service(){
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
        </>
    )
}