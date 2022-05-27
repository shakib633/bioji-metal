import React from 'react';
import auth from '../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { FcGoogle } from 'react-icons/fc';
import { ImCross } from 'react-icons/im';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';


const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";
    if (user) {
        navigate(from, { replace: true });
    }


    if (loading) {
        return <Loading></Loading>
    }

    let googleError = '';
    if (error) {
        googleError = <p className='text-red-400 text-center m-2 font-bold'><ImCross className='inline' /> Error: Popup closed by user</p>
    }
    return (
        <div className='pb-10'>
            <div className="divider font-bold">OR</div>
            {googleError}
            <button onClick={() => signInWithGoogle()} className="btn btn-outline  bg-base-100 w-2/4 block mx-auto"><FcGoogle className='inline  text-3xl' /> Continue With Google</button>
        </div>
    );
};

export default SocialLogin;