import React from 'react';
import ReactDOM from 'react-dom/client';
import singleImage from './shopPageImages/1.jpg';
function ShopSingle() {
    const shoot = () => {
        alert("Item Added to Cart");
      }
    return (
        <>
            <section className='aboutbanner'>
                <div className='aboutBackgroundContent'>
                    <div className='container'>
                        <h3>Product Single</h3>
                        <ul>
                            <li><a href='/home'>Home <span className='px-1'>/</span></a></li>
                            <li>Product Single</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section>
                <div className='d-flex justify-content-between container py-5'>
                    <div className='me-5'>
                        <img src={singleImage} className='ShopSingleImage'/>
                    </div>
                    <div className='ShopsingleCOntent flex-grow-1 w-100'>
                        <h2 className="fw-bolder">Wall Flange</h2>
                        <div className='d-flex justify-content-start ssreview py-2'>
                            <div>
                                <ul className='customer-review-star'>
                                    <li><i className="bi bi-star-fill star"></i></li>
                                    <li><i className="bi bi-star-fill star"></i></li>
                                    <li><i className="bi bi-star-fill star"></i></li>
                                    <li><i className="bi bi-star-fill star"></i></li>
                                    <li><i className="bi bi-star st"></i></li>
                                </ul>
                               

                            </div>
                            <div>
                                < p className='ms-4'>(25 customer reviews)</p>
                                
                            </div>
                        </div>
                        <p className='ssh3content fs-2 fw-bolder'>$360</p>
                        <p className='fs-6'>There are many or randomised words which don't look even slightly believable.</p>
                        <ul>
                            <li>Going through the cites of the word in classNameical.</li>
                           <li>There are many variations of passages.</li>
                        </ul>
                        <button type="button" class="btn btn-outline-primary" onClick={shoot}><a>Add To Cart</a></button>
                    </div>
                </div>
            </section>
        </>
    )
}
export default ShopSingle;