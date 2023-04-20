import React from 'react'
import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
export default function Signup() {

    let navigate = useNavigate();
    const [creds, setCreds] = useState({ firstName: "", email: "", password: "", cpassword: "" });

    const onChange = (e) => {
        setCreds({ ...creds, [e.target.name]: e.target.value })
    }

    const formSubmit = async (e) => {
        e.preventDefault();
        if (creds.password !== creds.cpassword) {
            alert("Password does not macth");
            return;
        }

        const body = {
            firstName: creds.firstName,
            email: creds.email,
            password: creds.password
        }
        console.log(body);
        const response = await axios.post('https://lime-mushy-turtle.cyclic.app/api/auth/createuser', body);
        const res = response.data;
        console.log(res.success);
        if (res.success === true) {
            localStorage.setItem('token', res.token);
            console.log("here");
            navigate('/home');
        }
        else {
            alert("Invalid creds");
        }
    }

    return (
        <div>
            <div class="container home">


                <form onSubmit={formSubmit}>
                    <div class="row justify-content-center">
                        <div class="col-12 col-md-8 col-lg-8 col-xl-6">
                            <div class="row">
                                <div class="col text-center">
                                    <h1>Register</h1>

                                </div>
                            </div>
                            <div class="row align-items-center">
                                <div class="col mt-4">
                                    <input type="text" name='firstName' class="form-control" placeholder="User Name" onChange={onChange} />
                                </div>
                            </div>
                            <div class="row align-items-center mt-4">
                                <div class="col">
                                    <input type="email" name='email' class="form-control" placeholder="Email" onChange={onChange} />
                                </div>
                            </div>
                            <div class="row align-items-center mt-4">
                                <div class="col">
                                    <input type="password" name='password' class="form-control" placeholder="Password" onChange={onChange} />
                                </div>
                                <div class="col">
                                    <input type="password" name='cpassword' class="form-control" placeholder="Confirm Password" onChange={onChange} />
                                </div>
                            </div>
                            <div class="row justify-content-start mt-4">
                                <div class="col">
                                    <div class="form-check">
                                        <label class="form-check-label">
                                            <input type="checkbox" class="form-check-input" />
                                            I Read and Accept <a href="https://github.com/Tushar1619/NotesPanda">Terms and Conditions</a>
                                        </label>
                                    </div>

                                    <button class="btn btn-primary mt-4">Submit</button>
                                    <hr />
                                    <button type="button" class="btn btn-link"><Link to="/login">Login</Link></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
