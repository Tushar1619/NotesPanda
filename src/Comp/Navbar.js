import React from 'react'
import {
  Link,
  useNavigate
} from "react-router-dom";
export default function Navbar() {
  let navigate = useNavigate();

  const handleLogout = ()=>{
    navigate("/login");
    localStorage.removeItem('token');
  }
  
  return (
    <div >
      <nav className="navbar fixed-top  navbar-expand-lg shadow-lg p-3   " style={{ backgroundColor: "rgb(46 66 65)" }}>
        <div className="container-fluid ">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div style={{ height: "60px" }} className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link className="navbar-brand" to="/company" style={{ color: "white" }}>Title</Link>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/home" style={{ color: "white" }}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/about" style={{ color: "white" }}>About Us</Link>

              </li>
            </ul>
            {!localStorage.getItem('token')?
              <form className="d-flex" role="search">
                <Link className="btn btn-secondary mx-1" to="/login" role="button">Login</Link>
                <Link className="btn btn-secondary mx-1" to="/signup" role="button">Signup</Link>
              </form>:<button className='btn btn-secondary' onClick={handleLogout}>Logout</button>
            }
          </div>
        </div>
      </nav>
    </div>
  )
}
