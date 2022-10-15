import React from 'react';
import ReactDOM from 'react-dom/client';
export default function Cart() {
    return(
    <>
        <section className='aboutbanner'>
            <div className='aboutBackgroundContent'>
                <div className='container'>
                    <h3>Home</h3>
                    <ul>
                        <li><a href='/home'>Home <span className='px-1'>/</span></a></li>
                        <li>cart</li>
                    </ul>
                </div>
            </div>
        </section>

        <section>
            <div class="card" style="width: 18rem;">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">An item</li>
                    <li class="list-group-item">A second item</li>
                    <li class="list-group-item">A third item</li>
                </ul>
                <div class="card-footer">
                    Card footer
                </div>
            </div>
        </section>
    </>
    )
}