import React from 'react';
import ReactDOM from 'react-dom/client';
import Axios from "axios";
import {useState,useEffect} from "react";
function SignIn() {
    const shoot = () => {
        alert("Login Success");
      }
      const url =""
      const [data, setData] = useState({
        Email: "",
        Password: "",
      })
      function submit(e){
       e.preventDefault();
       Axios.post(url,{
        Email: data.Email,
        Password: data.Password
       })
       .then(res => {console.log(res.data)})
      }

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
                            <form action="/action_page.php" className='signinForm' onSubmit={(e) =>submit(e)}>
                                <div className='text-center'>
                                    <h4>Sign In</h4>
                                    <p>Sign in to your account</p>
                                </div>

                                <input type="email" onChange={(e) => handle(e)} id="Email" value={data.Email} placeholder='Email' required className='py-2 pe-5 me-4 my-3 ps-2'></input>
                                <input type="text" onChange={(e) => handle(e)} id="Password" value={data.Password} placeholder='Password' required className='py-2 pe-5 me-4 my-3 ps-2'></input>
                                <div className='d-flex justify-content-around pt-3'>
                                    <div class="mb-3 form-check">
                                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                        <label class="form-check-label" for="exampleCheck1">Remember Me</label>
                                    </div>
                                    <div>
                                        <p><a href="/forgot">Forget Password?</a></p>
                                    </div>
                                </div>
                                <button className='btn btn-primary signInbutton' type='submit'><a href="/signin">Login</a></button>
                                <div className='d-flex justify-content-center pt-3'>
                                    <div><a href=""><i class="bi bi-facebook  SigninIcon"></i></a></div>
                                    <div><a href=''><i class="bi bi-twitter  SigninIcons"></i></a></div>
                                    <div><a href=""><i class="bi bi-linkedin  SigninIcon"></i></a></div>
                                </div>
                                <div className='d-flex justify-content-around pt-3'>
                                    <div><p>Don't have an account? </p></div>
                                    <div><p><a href="/signup">Create free account</a></p></div>
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
export default SignIn;