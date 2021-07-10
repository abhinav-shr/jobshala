import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

function Header() {
    return (
<nav className="navbar navbar-expand-lg navbar-light" style={{background:'whitesmoke'}}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Jobshala</Link>
    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> */}
      {/* <span className="navbar-toggler-icon"></span>
    </button> */}
    {/* <div className="collapse navbar-collapse" id="navbarSupportedContent"> */}
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">home</Link>
        </li>
        {/* <li className="nav-item">
          <Link className="nav-link" to="/">Link</Link>
        </li> */}
      </ul>
      
      <div className="d-flex">
        <Link className="nav-link" to="/forRecruiter">for employers</Link>
      </div>
    </div>
  {/* </div> */}
</nav>
    )
}

export default Header
