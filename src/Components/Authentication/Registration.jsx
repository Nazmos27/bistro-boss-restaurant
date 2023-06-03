import React, { useContext } from 'react'
import bannerImg from '../../assets/others/authentication.gif'
import { AuthContext } from '../../Providers/AuthProvider'
import { useForm } from 'react-hook-form'

const Registration = () => {
    const {createUser} = useContext(AuthContext)

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);



    // const handleRegister = e => {
    //     e.preventDefault()
    //     const form = e.target
    //     const email = form.email.value
    //     const password = form.password.value
    //     createUser(email,password)
    //     .then(result => {
    //         const user = result.user
    //         console.log(user);
    //     })
    //     .catch(error => {
    //         console.log(error.message);
    //     })

    // }

  return (
    <div>
        <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col md:mx-28 lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <img src={bannerImg} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-400 rounded-none">
                        <div className="card-body">
                            <form onSubmit={handleSubmit(onSubmit)} >
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Your Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" {...register("email", { required: true })}  placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" {...register("password", { required: true })} placeholder="password" className="input input-bordered" />
                                {errors.password && <span className='text-red-600 text-left'>*This field is required</span>}
                              
                            </div>
                            
                            <div className="form-control mt-6">
                                
                                <input  className="btn btn-primary rounded-none" type="submit" value="Create Account" />
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Registration