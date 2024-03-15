import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Validation from './SignupValidation';
import axios from 'axios';
import './Components/Css/register/style.css';
import Registerimg from './Components/Css/register/form-v6.jpg';

function Signup() {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: ''
    })
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleInput = (e) => {
        setValues((prev) => ({ ...prev, [e.target.name]: [e.target.value] }));
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(Validation(values));
        if (errors.name === "" && errors.email === "" && errors.password === "") {
            axios.post('http://localhost:8081/signup', values)
                .then(res => {
                    navigate('/');
                })
                .catch(err => console.log(err));
        }

    }
    return (
        // <div className='d-flex justify-content-center align-items-center vh-100'>
        //     <div className='bg-white p-3 rounded w-25'>
        //         <form action="" onSubmit={handleSubmit}>
        //             <div className='mb-3'>
        //                 <label htmlFor="name">Name *</label>
        //                 <input type="text" name="name" onChange={handleInput} className='form-control rounded-0' id="" placeholder='Enter Name'/>
        //                 {errors.name && <span className='text-danger'>{errors.name}</span>}
        //             </div>
        //             <div className='mb-3'>
        //                 <label htmlFor="email">Email *</label>
        //                 <input type="email" name="email" onChange={handleInput} className='form-control rounded-0' id="" placeholder='Enter Email'/>
        //                 {errors.email && <span className='text-danger'>{errors.email}</span>}
        //             </div>
        //             <div className='mb-3'>
        //                 <label htmlFor="password">Password *</label>
        //                 <input type="password" name="password" onChange={handleInput} className='form-control rounded-0' id="" placeholder='Enter Password'/>
        //                 {errors.password && <span className='text-danger'>{errors.password}</span>}
        //             </div>
        //             <button type="submit" className='btn btn-success'>Sign Up</button>
        //             <p></p>
        //             <Link to="/" className='btn btn-default border text-decoration-none'>Click to login</Link>
        //         </form>

        //     </div>
        // </div>
        <div className="page-content">
            <div className="form-v6-content">
                <div className="form-left">
                    <img src={Registerimg} alt="form" />
                </div>
                <form className="form-detail" onSubmit={handleSubmit}>
                    <h2>Register Form</h2>
                    <div className="form-row mb-4">
                        <input
                            type="text"
                            name="name"
                            id="full-name"
                            className="input-text"
                            placeholder="Your Name"
                            onChange={handleInput}
                        />
                        {errors.name && <span className='text-danger errormsg'>{errors.name}</span>}
                    </div>
                    <div className="form-row mb-4">
                        <input
                            type="text"
                            name="email"
                            id="your-email"
                            className="input-text"
                            placeholder="Email Address"
                            onChange={handleInput}
                        />
                        {errors.email && <span className='text-danger errormsg'>{errors.email}</span>}
                    </div>
                    <div className="form-row mb-4">
                        <input
                            type="password"
                            name="password"
                            id="password"
                            className="input-text"
                            placeholder="Password"
                            onChange={handleInput}
                        />
                        {errors.password && <span className='text-danger errormsg'>{errors.password}</span>}
                    </div>
                    <div className="form-row-last">
                        <input
                            type="submit"
                            name="register"
                            className="register"
                            value="Register"
                        />
                <Link to="/" className='form-row btn btn-outline-info border login'>Click to login</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup