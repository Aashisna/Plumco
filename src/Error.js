import React from 'react';
import ReactDOM from 'react-dom/client';
import Errorimage from './ErrorImages/errorImage.png';

function Error() {
    return(
        <>
            <section className='aboutbanner'>
                <div className='aboutBackgroundContent'>
                    <div className='container'>
                    <h3>404 Page</h3>
                    <ul>
                        <li><a href='/home'>Home <span className='px-1'>/</span></a></li>
                        <li>404</li>
                    </ul>
                    </div>
                </div>
            </section>

            <section>
            <div className='d-flex justify-content-around container py-5'>
                <img src={Errorimage}/>
            </div>
            </section>

            <section>
            <div className='d-flex justify-content-around container py-5'>
                <div className=' text-center py-5 container'>
                <h2 className='py-3'>Oops! Page Not Found!</h2>
                <p className='py-3 erorPara'>We’re sorry but we can’t seem to find the page you requested. This might be because you have typed the web address incorrectly.</p>
                <div className='thirdbutton'><a className='thirdbtn' href='/'>Back To Home</a></div>
            </div>
            </div>
            </section>
        </>
    )

}
export default Error;