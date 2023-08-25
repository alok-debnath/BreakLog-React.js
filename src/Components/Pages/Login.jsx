import React from 'react'
import { api } from '../../api/Api';
import { useForm } from 'react-hook-form';

const Login = () => {
    const { register, handleSubmit, errors } = useForm();
    
    const formSubmit = async (data) => {
        try {
            const response = await api.post('registration', { data });

            if (response.status === 200) {
                const responseData = response.data.message;

                setSearchResults(responseData);
            } else {
                console.error('Failed to send data');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };
    return (
        <>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold underline">Breaklog</h1>
                        <p className="py-6"><span className='text-2xl font-bold'>Welcome back!</span> Login or Create a new account to get started.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={handleSubmit(formSubmit)}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">UserName</span>
                                    </label>
                                    <input type="text" placeholder="username" className="input input-bordered" id="username" name="username"  />
                                    {/* {errors.username && <div>{errors.username.message}</div>} */}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="password" className="input input-bordered" id="password" name="password"/>
                                    {/* {errors.password && <div>{errors.password.message}</div>} */}
                                    {/* <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label> */}
                                </div>
                                <div className="form-control mt-6">
                                    <button type='submit' className="btn btn-primary">Next <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                                    </svg>

                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login