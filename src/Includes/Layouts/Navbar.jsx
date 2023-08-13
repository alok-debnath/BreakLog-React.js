import React from 'react';

const Navbar = ({ themeToggle }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <button
          className="navbar-toggler order-3"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="justify-content-start order-1">
          <div className="dropdown">
            <button
              className="btn"
              type="button"
              id="profileDropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <p className='mb-0'>User name</p>
            </button>
            <ul className="dropdown-menu" aria-labelledby="profileDropdown">
              <li>
                <a className="dropdown-item" href="#">
                  Profile
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Settings
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className='mx-auto order-2 d-flex justify-content-center'>
          <a className="navbar-brand text-center fw-bold" href="#">
            BreakLog
          </a>
        </div>


        <div className="collapse navbar-collapse order-4" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link btn btn-light active btn-lg w-100 mb-2" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link btn btn-light btn-lg w-100" href="#">
                Link
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
