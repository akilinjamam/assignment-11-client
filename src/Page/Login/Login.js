import React, { useRef } from 'react';
import { Button } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import SocialSide from '../SocialSide/SocialSide';
import Spin from '../Spinner/Spinner';

const Login = () => {

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    let elementError;

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
        auth)

    const navigate = useNavigate()


    const handleNavigate = () => {
        navigate('/register')
    }

    const emailRef = useRef('')
    const handleSubmit = (event) => {

        event.preventDefault();

        console.log('clicked');

        const email = event.target.email.value;
        const password = event.target.password.value;

        console.log(email, password, 'working?');

        signInWithEmailAndPassword(email, password)
    }


    if (loading) {
        return (<Spin></Spin>)
    }



    if (error) {
        elementError = <div>
            <p className='text-danger'> Error: {error?.message}  </p>
        </div>
    }

    if (user) {
        console.log(user);
        navigate('/')
    }


    return (
        <div>
            <h2>Login Pages</h2>

            <div className='border border-dark rounded p-4 w-75 mx-auto'>
                <form onSubmit={handleSubmit}>

                    <input className='w-50' ref={emailRef} type="text" name="email" placeholder='type your email' id="" required /> <br /><br />
                    <input className='w-50' type="password" name="password" placeholder='type your password' id="" required /> <br /><br />

                    {/* for forget password */}
                    <p className='text-dark'> forget your password? <span style={{ cursor: 'pointer', fontSize: '13px' }} className='text-danger' onClick={async () => {

                        const email = emailRef.current.value
                        if (email) {
                            await sendPasswordResetEmail(email);
                            toast('Sent email to your Gmail Account. please check it');
                        } else {
                            toast('please enter your email address')
                        }
                    }}   > create new password </span> </p>
                    {/* navigate to login */}
                    <p className='text-dark'>Are You new in Exertion? <span style={{ cursor: 'pointer' }} className='text-danger' onClick={handleNavigate}  > Register </span> </p>

                    {/* showing error */}
                    <div>
                        <p  > {elementError} </p>

                    </div>

                    <div>
                        <SocialSide></SocialSide>
                    </div>


                    <Button className='d-block mx-auto mt-3' variant="primary" type="submit">
                        Login
                    </Button>

                </form>
            </div>

            <div style={{ height: '300px' }}>

            </div>
        </div>
    );
};

export default Login;