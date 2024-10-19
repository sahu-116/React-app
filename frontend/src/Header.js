import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react'
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="d-flex bg-dark flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
    <div className="col-md-3 mb-2 mb-md-0">
      <Link
        to="/"
        className="d-inline-flex link-body-emphasis text-decoration-none"
      >
        <svg
          className="bi"
          width={40}
          height={32}
          role="img"
          aria-label="Bootstrap"
        >
          <use xlinkHref="#bootstrap" />
        </svg>
      </Link>
    </div>
    <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
      <li>
        <Link to="/" className="nav-link px-2 link-secondary">
          Home
        </Link>
      </li>
      <li>
        <Link to="/about" className="nav-link px-2">
          About
        </Link>
      </li>
      <li>
        <Link to="/contact" className="nav-link px-2">
          Contact
        </Link>
      </li>
      <li>
        <Link to="/faq" className="nav-link px-2">
          FAQs
        </Link>
      </li>
      <li>
        <Link to="/crudoperation" className="nav-link px-2">
          CRUD-operation
        </Link>
      </li>
     
    </ul>
    {/* <!-- Buttons aligned to the right --> */}
      <div class="d-flex ms-auto">
        <Link to="/login" class="btn btn-outline-light me-2 btn-responsive">Login</Link>
        <Link to="/signup" class="btn btn-warning btn-responsive">Sign-Up</Link>
      </div>
  </header>
  
  )
}
