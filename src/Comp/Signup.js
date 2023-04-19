import React from 'react'
import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
export default function Signup() {

    let navigate = useNavigate();
    const [creds, setCreds] = useState({ firstName: "", email: "", password: "" });
    const onChange = (e) => {
        setCreds({ ...creds, [e.target.name]: e.target.value })
    }

    const formSubmit = async (e) => {
        e.preventDefault();
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
            <div className="container center_div">
                <h1 className='mb-4 text-center'>NotesPanda</h1>
                <h3 className='mb-4 text-center'>SignUp</h3>
                <form onSubmit={formSubmit}>
                    <div className="form-row">
                        <div className="form-group ">
                            <label htmlFor="firstName">Name</label>
                            <input type="text" required minLength={3} className="form-control" id="firstName" name="firstName" placeholder="John" onChange={onChange} />
                        </div>
                        <div className="form-group ">
                            <label htmlFor="inputEmail4">Email</label>
                            <input type="email" required  className="form-control" id="inputEmail4" name="email" placeholder="Email" onChange={onChange} />
                        </div>
                        <div className="form-group  mb-2">
                            <label htmlFor="password">Password</label>
                            <input type="password" required minLength={5} className="form-control" id="password" name="password" placeholder="Password" onChange={onChange} />
                        </div>
                        {/* <div className="form-group col-md-6 mb-2">
                            <label htmlFor="confPassword">Confirm Password</label>
                            <input type="password" className="form-control" id="confPassword" name="confPassword" placeholder="Confirm Password" onChange={onChange}/>
                        </div> */}
                    </div>
                    <Link className="nav-link text-primary mb-3 mx-1" to="/login">Login!</Link>
                    <button type="submit" className="btn btn-primary">Sign in</button>
                </form>
            </div>
        </div>
    )
}
