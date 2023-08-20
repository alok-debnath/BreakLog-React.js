import React from 'react'
import Button from '../../Components/UI/Button'

const NavbarBottom = () => {
    return (
        <>
            <div className="btm-nav btm-nav-md">
                {/* <button>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                </button> */}
                <div className='cursor-default'>
                    <div className="flex gap-3">
                        <div>
                            <div className="dropdown dropdown-top dropdown-hover">
                                {/* <label className="btn btn-fill swap swap-rotate">
                                    <input type="checkbox" />
                                    <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>
                                    <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg>
                                </label> */}
                                <Button
                                    className="btn btn-fill"
                                    text={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                                    </svg>
                                    }
                                />
                                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                    <li><a>Mark as Leave</a></li>
                                    <li><a>Work From Home</a></li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <Button
                                className="btn"
                                text="Enter log"
                            />
                        </div>


                    </div>

                </div>
            </div>
        </>
    )
}

export default NavbarBottom