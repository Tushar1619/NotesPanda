import React from 'react'
import { useState } from 'react';
import { useNavigate  } from "react-router-dom";
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
        const response = await axios.post('http://localhost:4000/api/auth/login', body);
        const res = response.data;
        console.log(res.success);
        if(res.success===true){
            localStorage.setItem('token', res.token);
            navigate('/home');
        }
        else{
            alert("Invalid creds");
        }
    }
    return (


        <div>
            <div className="container home">
                <h1 className='mb-2'>Login</h1>
                <form onSubmit={formSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input type="email" className="form-control" name='email' id="email" aria-describedby="emailHelp" placeholder="Enter email" onChange={onChange} />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" name='password' id="password" placeholder="Password" onChange={onChange} />
                    </div>
                    <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" name='checkbox' id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}
