import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../icon/logo.png'

const SocialSide = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    let errorElement;
    let theLoading;

    const navigate = useNavigate();
    const location = useLocation();

    let from = location?.state?.from?.pathname || "/";

    if (user) {
        navigate(from, { replace: true });
    }

    if (error) {

        errorElement = <div>
            <p> Error: {error?.message} </p>
        </div>

    }

    if (loading) {

        theLoading = <div>
            <p>Loading...</p>
        </div>

    }



    const handleGoogleSingIn = () => {
        signInWithGoogle(user)
    }




    return (
        <div>
            <div>
                <p style={{ fontSize: '12px', textAlign: 'center', color: 'red' }} > {errorElement} </p>
                <p> {theLoading} </p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }} >
                <div className='w-50 text-primary' >
                    <hr />
                </div>
                <div>
                    <p style={{ color: 'gray' }} className='mx-4 pt-1' >or</p>
                </div>
                <div className='w-50  text-primary'>
                    <hr />
                </div>
            </div>

            <div>
                <button onClick={handleGoogleSingIn} style={{ border: 'none', padding: '10px', display: 'block', margin: 'auto', marginBottom: '10px', width: '230px' }}>

                    <img style={{ height: '30px', width: '30px', marginRight: '10px' }} src={logo} alt="" />

                    Sign in with Google
                </button>
            </div>




        </div>
    );
};

export default SocialSide;