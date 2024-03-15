import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Validation from './Loginvalidation'
import axios from 'axios';
import './Components/Css/login.css'
import './Components/Css/util.css'
import Loginimg from './Components/Images/img-01.png'

function Login() {
    const [values, setValues] = useState({
email : '',
password: ''
    })
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleInput = (e) => {
        setValues((prev) => ({...prev, [e.target.name]:[e.target.value]}));
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        setErrors(Validation(values));
        if(errors.email === "" && errors.password === ""){
            axios.post('http://localhost:8081/login', values)
            .then(res => {
                if(res.data === "Success"){
                    navigate('/home');
                }else{
                    alert("Invalid User");
                }
            })
            .catch(err => console.log(err));
        }

    }
  return (
    <div className="limiter">
            <div className="container-login100">
                <div className="wrap-login100">
                    <div className="login100-pic js-tilt" data-tilt>
                        <img src={Loginimg} alt="IMG" />
                    </div>

                    <form className="login100-form validate-form" onSubmit={handleSubmit}>
                        <span className="login100-form-title">
                            User Login
                        </span>

                        <div className="wrap-input100 validate-input" >
                            <input className="input100" type="text" name="email" onChange={handleInput} placeholder="Email" />
                            {errors.email && <span className='text-danger'>{errors.email}</span>}
                            <span className="focus-input100"></span>
                            <span className="symbol-input100">
                            {/* <FontAwesomeIcon icon={faEnvelope} /> */}
                            </span>
                        </div>

                        <div className="wrap-input100 validate-input" >
                            <input className="input100" type="password" name="password" onChange={handleInput} placeholder="Password" />
                            {errors.password && <span className='text-danger'>{errors.password}</span>}
                            <span className="focus-input100"></span>
                            <span className="symbol-input100">
                                {/* <i className="fa fa-lock" aria-hidden="true"></i> */}
                            </span>
                        </div>

                        <div className="container-login100-form-btn">
                            <button type='submit' className="login100-form-btn">
                                Login
                            </button>
                        </div>

                        {/* <div className="text-center p-t-12">
                            <span className="txt1">
                                Forgot
                            </span>
                            <a className="txt2" href="#">
                                Username / Password?
                            </a>
                        </div> */}

                        <div className="text-center p-t-136">
                            <Link to="/signup" className="txt2" href="#">
                                Create your Account
                                <i className="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
  )
}

export default Login;