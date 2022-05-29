import React, { useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

import { BsArrowRight } from 'react-icons/bs';
import { ImCross } from 'react-icons/im';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../Loading/Loading';
import useToken from '../hooks/UseToken';
import { FcGoogle } from 'react-icons/fc';



const SignIn = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();

    const[signInWithGoogle, googleUser, googleLoading, googleError]=useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

     const [token]=useToken(user|| googleUser)

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
        auth
    );

    //   form data 
    const handleSignIn = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
    }

    // reset password 
    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast.info("Verification email sent");
        }
        else {
            toast.error('Please enter your email address');
        }
    };

    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    if (token) {
        console.log(token);
        navigate(from, { replace: true });
    }

    if (loading || sending || googleLoading) {
        return <Loading></Loading>
    }

    let loginError = '';
    if (error || googleError) {
        loginError = <p className='text-red-500 text-center m-2 font-bold'><ImCross className='inline' /> Error: Incorrect email address or password</p>
    }

    return (
        <section className='bg-base-300'>
            <div className='flex justify-center'>
                <div>
                    <h2 className='text-4xl text-center p-5 font-bold'>Please Sign In </h2>

                    {/* form  */}
                    <form onSubmit={handleSignIn}>
                        <input ref={emailRef} type="email" placeholder="Please enter your email address" className="input w-full max-w-lg mb-3 mt-3" required />
                        <input ref={passwordRef} type="password" placeholder="Please enter your password" className="input  w-full max-w-lg mb-3" required />
                        {loginError}
                        <input className='btn btn-outline w-2/4' type="submit" value="Sign In" />
                    </form>

                    <p className='mb-3 mt-3'>Have NO Account <Link to='/signup'><span className='text-blue-400 ml-1'>Please Sign Up</span> <BsArrowRight className='inline text-xl text-blue-400' /></Link></p>
                    <p className='mb-3'>Forget Password?<button onClick={resetPassword}> <span className='ml-2 text-blue-400'>Reset Password</span> <BsArrowRight className='inline text-xl text-blue-400' /></button></p>
                </div>
                <ToastContainer />
            </div>
            
            <button
                        onClick={() => signInWithGoogle()}
                        className="btn btn-outline"
                    ><FcGoogle className='inline  text-3xl' /> Continue With Google</button>
        
        </section>
    );
};

export default SignIn;