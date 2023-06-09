import React from 'react'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
// import Home from './Home';
import axios from 'axios'
export default function Login() {

    let navigate = useNavigate();
    const [creds, setCreds] = useState({ email: "", password: "" });
    const onChange = (e) => {
        setCreds({ ...creds, [e.target.name]: e.target.value })
    }

    const formSubmit = async (e) => {
        e.preventDefault();
        const body = {
            email: creds.email,
            password: creds.password
        }

        console.log(body);
        const response = await axios.post('https://lime-mushy-turtle.cyclic.app/api/auth/login', body);
        const res = response.data;
        console.log(res.success);
        if (res.success === true) {
            localStorage.setItem('token', res.token);
            navigate('/home');
        }
        else {
            alert(res.message);
        }
    }
    return (


        <div>

            {/* <div className="container  center_div home">
                <h1 className='mb-4 text-center'>NotesPanda</h1>
                <h3 className='mb-4 text-center'>Login</h3>
                <form onSubmit={formSubmit}>
                    <div className="form-row align-items-center">
                        <div className="form-group ">
                            <label htmlFor="email" className='' >Email address</label>
                            <input type="email" className="form-control" name='email' required  id="email" aria-describedby="emailHelp" placeholder="Enter email" onChange={onChange} />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                    </div>

                    <div className="form-group ">
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" required minLength={5} name='password' id="password" placeholder="Password" onChange={onChange} />
                        </div>
                    </div>
                    <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" name='checkbox' id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    <div>
                        <Link className="nav-link text-primary mb-3 mx-1" to="/signup">SignUp!</Link>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>

                </form> */}
            {/* </div> */}

            <div class="back home2">

                    
                <div class="div-center">


                    <div class="content">


                        <h3>Login</h3>
                        <hr />
                        <form onSubmit={formSubmit}>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" class="form-control" name="email" id="exampleInputEmail1" placeholder="Email" onChange={onChange}/>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" class="form-control" name='password' required minLength={5} id="exampleInputPassword1" placeholder="Password" onChange={onChange}/>
                            </div>
                            <button type="submit" class="btn btn-primary mt-2 ">Login</button>
                            <hr />
                            <button type="button" class="btn btn-link"><Link to="/signup">Signup</Link></button>
                            {/* <button type="button" class="btn btn-link">Reset Password</button> */}

                        </form>

                    </div>
                </div>
            </div>
            </div>
            )
}
