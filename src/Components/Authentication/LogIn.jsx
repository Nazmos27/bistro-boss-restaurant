import React, { useContext, useEffect, useRef, useState } from 'react'
import bannerImg from '../../assets/others/authentication2.png'
import { LoadCanvasTemplate,loadCaptchaEnginge,validateCaptcha } from 'react-simple-captcha'
import { AuthContext } from '../../Providers/AuthProvider'
import { Link } from 'react-router-dom'

const LogIn = () => {
    const {logIn} = useContext(AuthContext)
    const captchaRef = useRef()
    const [disable,setDisable] = useState(true)
    useEffect(() => {
        loadCaptchaEnginge(6); 
    },[])

    const handleValidateCaptcha = () => {
        const user_captcha_value = captchaRef.current.value
        if(validateCaptcha(user_captcha_value)){
            setDisable(false)
        }
        else{
            setDisable(true)
        }
    }


    const handleLogIn = (event) => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        console.log(email,password);
        logIn(email,password)
        .then(result => {
            const user = result.user
            console.log(user);
        })
        .catch(error => {
            console.log(error.message);
        })
        

    }





    return (
        <div>
            <div className="hero min-h-screen bg-base-200 ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <img src={bannerImg} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-400 rounded-none">
                        <div className="card-body">
                            <form onSubmit={handleLogIn} >
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            
                            <div className="form-control">
                                <label className="label ">
                                    
                                    <LoadCanvasTemplate></LoadCanvasTemplate>
                                </label>
                                <input type="text" ref={captchaRef} name='captcha' placeholder="Type The Text Above" className="input input-bordered" />
                                <button onClick={handleValidateCaptcha} className='btn btn-sm md:mt-6'>Validate Captcha</button>
                                
                            </div>
                            <div className="form-control mt-6">
                                
                                <input disabled={disable} className="btn bg-[#D1A054] rounded-none" type="submit" value="Log In" />
                                <p className='mt-4 sm:text-sm'>New To This Website?<Link to="/register" className='text-blue-600'>Create An Account</Link></p>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LogIn