import React from 'react';
import ReactDOM from 'react-dom/client';
import im1 from './shopPageImages/1.jpg';
import im2 from './shopPageImages/2.jpg';
import im3 from './shopPageImages/3.jpg';
import im4 from './shopPageImages/4.jpg';
import im5 from './shopPageImages/5.jpg';
import im6 from './shopPageImages/6.jpg';

export default function ShopPage() {
  const shoot = () => {
    alert("Item added to cart");
  }

  // const toastTrigger = document.getElementById('liveToastBtn')
  // const toastLiveExample = document.getElementById('liveToast')
  // if (toastTrigger) {
  //   toastTrigger.addEventListener('click', () => {
  //     const toast = new bootstrap.Toast(toastLiveExample)

  //     toast.show()
  //   })
  // }
  return (
    <>
      <section className='aboutbanner'>
        <div className='aboutBackgroundContent'>
          <div className='container'>
            <h3>Shop Page</h3>
            <ul>
              <li><a href='/home'>Home <span className='px-1'>/</span></a></li>
              <li>Shop</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <div className='d-flex justify-content-between container py-5'>
          <div>
            <img src={im1} className="im1" />
            <div className='shopPageBody im1 text-center py-4'>
              <h4><a href="#">Wall Flange</a></h4>
              <p>$200</p>
              <button type="button" className="btn btn-primary" id="liveAlertBtn" onClick={(shoot)}>Add To Cart</button>
            </div>
          </div>

          <div>
            <img src={im2} className="im1" />
            <div className='shopPageBody im1 text-center py-4'>
              <h4><a href="#">Wall Flange</a></h4>
              <p>$200</p>
              <button type="button" className="btn btn-primary" id="liveAlertBtn" onClick={(shoot)}>Add To Cart</button>
            </div>

          </div>

          <div>
            <img src={im3} className="im1" />
            <div className='shopPageBody im1 text-center py-4'>
              <h4><a href="#">Wall Flange</a></h4>
              <p>$200</p>
              <button type="button" className="btn btn-primary" id="liveAlertBtn" onClick={(shoot)}>Add To Cart</button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className='d-flex justify-content-between container py-5'>
          <div>
            <img src={im4} className="im1" />
            <div className='shopPageBody im1 text-center py-4'>
              <h4><a href="#">Wall Flange</a></h4>
              <p>$200</p>
              <button type="button" className="btn btn-primary" id="liveAlertBtn" onClick={(shoot)}>Add To Cart</button>
            </div>
          </div>

          <div>
            <img src={im5} className="im1" />
            <div className='shopPageBody im1 text-center py-4'>
              <h4><a href="#">Wall Flange</a></h4>
              <p>$200</p>
              <button type="button" className="btn btn-primary" id="liveAlertBtn" onClick={(shoot)}>Add To Cart</button>
            </div>
          </div>

          <div>
            <img src={im6} className="im1" />
            <div className='shopPageBody im1 text-center py-4'>
              <h4><a href="#">Wall Flange</a></h4>
              <p>$200</p>
              <button type="button" className="btn btn-primary" id="liveAlertBtn" onClick={(shoot)}>Add To Cart</button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className='d-flex justify-content-center container py-5'>
          <div className='shoppageIcon'>
           <h4><a href="/shoppage"><i className="bi bi-chevron-left"></i></a></h4>
          </div>
          <div className='shoppageIcon'>
          <h4><a href="/shoppage"><i class="bi bi-1-circle"></i></a></h4>
          </div>

          <div className='shoppageIcon'>
          <h4><a href="/shoppage"><i class="bi bi-2-circle"></i></a></h4>
          </div>

          <div className='shoppageIcon'>
          <h4><a href="/shoppage"><i class="bi bi-3-circle"></i></a></h4>
          </div>

          <div className='shoppageIcon'>
          <h4><a href="/shoppage"><i class="bi bi-chevron-right"></i></a></h4>
          </div>

        </div>
    </section >
    </>
  )
}