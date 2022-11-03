import React from 'react';
import ReactDOM from 'react-dom/client';
import {useEffect,useState} from "react";
function Signup() {
    const shoot = () => {
        alert("Login Success");
      }
      const [data, setData] = useState({
        FullName: "",
        Email: "",
        Password: "",
        ConfirmPassword: ""

      })

      function handle(e){
        const newdata = {...data}
        newdata[e.target.id] = e.target.value
        setData(newdata);
        console.log(newdata)
      }
    return (<>
        <div className=' d-flex justify-content-around'>
            <div className='text-center py-5 container'>
                <section>
                    <div className='container'>
                        <div className='contactForm'>
                            <form action="/action_page.php" className='signinForm'>
                                <div className='text-center'>
                                    <h4>Sign Up</h4>
                                    <p>Signup your account</p>
                                </div>
                                 
                                <input type="text" onChange={(e) => handle(e)} id="FullName" value={data.FullName}placeholder='Full Name' required className='py-2 pe-5 me-4 my-3 ps-2'></input>
                                <input type="email" onChange={(e) => handle(e)} id="Email" value={data.Email}placeholder='Email' required className='py-2 pe-5 me-4 my-3 ps-2'></input>
                                <input type="text"  onChange={(e) => handle(e)} id="Password" value={data.Password} placeholder='Password' required className='py-2 pe-5 me-4 my-3 ps-2'></input>
                                <input type="text" onChange={(e) => handle(e)} id="ConfirmPassword" value={data.ConfirmPassword}placeholder='Confirm Password' required className='py-2 pe-5 me-4 my-3 ps-2'></input>
                                <button className='btn btn-primary signInbutton' type='submit'><a href="/">Signup</a></button>
                                <div className='d-flex justify-content-center pt-3'>
                                    <div><a href=""><i class="bi bi-facebook  SigninIcon"></i></a></div>
                                    <div><a href=''><i class="bi bi-twitter  SigninIcons"></i></a></div>
                                    <div><a href=""><i class="bi bi-linkedin  SigninIcon"></i></a></div>
                                </div>
                                <div className='d-flex justify-content-around pt-3'>
                                    <div><p>Already have an account? </p></div>
                                    <div><p><a href="/signin"> Return to Sign In</a></p></div>
                                </div>
                            </form>
                            
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </>
    )
}
export default Signup;