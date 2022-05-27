import React from 'react';
import { useForm } from "react-hook-form";
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Link, useNavigate } from 'react-router-dom';
import { ImCross } from 'react-icons/im';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BsArrowRight } from 'react-icons/bs';
import Loading from '../Loading/Loading';
import SocialLogin from './SocialLogin';

const SignUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [updateProfile, updating] = useUpdateProfile(auth);

    const onSubmit = async data => {
        const displayName = data.name;
        const email = data.email;
        const password = data.password;
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: displayName });
        toast.info('Profile updated successfully');
    };

    const navigate = useNavigate();
    if (user) {
        navigate('/');
    }

    if (loading || updating) {
        return <Loading></Loading>
    }

    let signUpError = '';
    if (error) {
        signUpError = <p className='font-bold text-red-500 mb-4'><ImCross className='inline' /> Error: The email address you have entered is already registered. Please try another email to register'</p>
    }

    return (
        <section className='bg-base-300 pb-10'>
            <h2 className='text-4xl text-center p-5 font-bold'>Please Sign Up</h2>

            <form className='flex flex-col items-center' onSubmit={handleSubmit(onSubmit)}>

                {/* name  */}
                <div className="form-control w-full max-w-lg">
                    <input {...register("name", {
                        required: {
                            value: true,
                            message: "Name field is required "
                        }
                    })}
                        type="text" placeholder="Please enter your name" className="input input-bordered w-full max-w-lg" />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className=" text-red-400 label-text-alt">{errors.name.message}</span>}
                    </label>
                </div>

                {/* email */}
                <div className="form-control w-full max-w-lg">
                    <input {...register("email", {
                        required: {
                            value: true,
                            message: "Email field is required "
                        },
                        pattern: {
                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                            message: 'Provide a valid email address'
                        }
                    })}
                        type="email" placeholder="Please enter your email address" className="input input-bordered w-full max-w-lg" />
                    <label className="label">
                        {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                        {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                    </label>
                </div>
                {signUpError}
                {/* password  */}
                <div className="form-control w-full max-w-lg">
                    <input {...register("password", {
                        required: {
                            value: true,
                            message: "Password field is required "
                        },
                        minLength: {
                            value: 6,
                            message: 'Password must be 6 characters or longer'
                        }
                    })}
                        type="password" placeholder="Please enter your password" className="input input-bordered w-full max-w-lg" />
                    <label className="label">
                        {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                        {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                    </label>
                </div>

                <input className="btn btn-outline w-1/4	" type="submit" value="Sign Up" />
            </form>
            <ToastContainer />
            <p className='mt-3 text-center'>Already have an account? <Link to='/signin'><span className='text-blue-400 ml-1'>Please Sign In</span> <BsArrowRight className='inline text-xl text-blue-400' /></Link></p>

            <div>
                <SocialLogin></SocialLogin>
            </div>
        </section>
    );
};

export default SignUp;