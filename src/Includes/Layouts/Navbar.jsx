import React from 'react';

const Navbar = ({ themeToggle }) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand me-2" href="https://mdbgo.com/">
            <img
              src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
              height={16}
              alt="MDB Logo"
              loading="lazy"
              style={{ marginTop: "-1px" }}
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarButtonsExample"
            aria-controls="navbarButtonsExample"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarButtonsExample">
            <ul className="navbar-nav me-auto mt-3 mt-lg-0 mb-lg-0 align-items-center">
              <li className="nav-item mb-3 mb-lg-0 ms-lg-3">
                <button type="button" className="btn btn-primary">
                  Home
                </button>
              </li>
              <li className="nav-item mb-3 mb-lg-0 ms-lg-3">
                <button type="button" className="btn btn-primary">
                  History
                </button>
              </li>
            </ul>
            <div className="d-flex align-items-center">
              <button type="button" className="btn btn-primary me-3">
                Sign up for free
              </button>
              <button type="button" className="btn btn-dark px-3">
                Profile
              </button>
            </div>
          </div>
        </div>
      </nav>

    </>

  );
};

export default Navbar;
