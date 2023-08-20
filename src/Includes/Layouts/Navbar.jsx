import React from 'react';

const Navbar = ({ themeToggle }) => {
  return (
    <>
      <div className="navbar bg-base-100 fixed z-10">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-lg dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><a className='focus'>Homepage</a></li>
              <li><a>History</a></li>
              {/* <li><a>About</a></li> */}
            </ul>
          </div>
          <div className="flex-1">
            <a className="btn btn-ghost normal-case text-xl">BreakLog.v4</a>
          </div>
        </div>
        <div className="navbar-end gap-2">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn rounded-3xl">
              <p className="font-bold">User Name</p>
            </label>
            <ul tabIndex={0} className="menu menu-lg dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li onClick={() => window.setting_modal.showModal()}><a>Settings</a></li>
              <li><a>Logout</a></li>
            </ul>
          </div>
        </div>
      </div>
      {/* <progress className="progress"></progress> */}
    </>

  );
};

export default Navbar;
