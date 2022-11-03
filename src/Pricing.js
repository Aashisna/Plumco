import React from 'react';
import ReactDOM from 'react-dom/client';
import im1 from './shopPageImages/1.jpg';
import im2 from './shopPageImages/2.jpg';
import im3 from './shopPageImages/3.jpg';
import im4 from './shopPageImages/4.jpg';
import im5 from './shopPageImages/5.jpg';
import im6 from './shopPageImages/6.jpg';

export default function Pricing() {


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
            <h3>Pricing Page</h3>
            <ul>
              <li><a href='/home'>Home <span className='px-1'>/</span></a></li>
              <li>Pricing</li>
            </ul>
          </div>
        </div>
      </section>
   
    </>
  )
}