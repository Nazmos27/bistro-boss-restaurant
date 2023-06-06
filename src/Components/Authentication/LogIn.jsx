import React, { useContext, useEffect, useRef, useState } from 'react'
import bannerImg from '../../assets/others/authentication2.png'
import { LoadCanvasTemplate,loadCaptchaEnginge,validateCaptcha } from 'react-simple-captcha'
import { AuthContext } from '../../Providers/AuthProvider'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

const LogIn = () => {
    const {logIn} = useContext(AuthContext)
    const [disable,setDisable] = useState(true)

    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/'


    useEffect(() => {
        loadCaptchaEnginge(6); 
    },[])

    const handleValidateCaptcha = (e) => {
        const user_captcha_value = e.target.value
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
            Swal.fire(
                'Log In Successful',
                
              )
            navigate(from,{replace:true})
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
                                <input type="text" onBlur={handleValidateCaptcha} name='captcha' placeholder="Type The Text Above" className="input input-bordered" />
                                
                                
                            </div>
                            <div className="form-control mt-6">
                                {/* todo:button have to be disable */}
                                <input disabled={false} className="btn bg-[#D1A054] rounded-none" type="submit" value="Log In" />
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