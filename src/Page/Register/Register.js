import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Spin from '../Spinner/Spinner';


const Register = () => {

    const navigate = useNavigate()

    const handleNavigate = () => {

        navigate('/login')
    }


    const [
        createUserWithEmailAndPassword,
        user

    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true })


    const [updateProfile, updating] = useUpdateProfile(auth);





    const [agree, setAgree] = useState(false);


    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('clicked');

        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        console.log(email, password, 'working');

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name })
        navigate('/');


    }


    if (updating) {
        return <Spin></Spin>
    }

    if (user) {
        console.log('user', user)
    }





    return (
        <div>
            <h2>this is Register</h2>

            <div className='border border-dark rounded p-4 w-75 mx-auto'>
                <form onSubmit={handleSubmit}>
                    <input className='w-50' type="text" name="name" placeholder='type your name' id="" required /> <br /><br />
                    <input className='w-50' type="text" name="email" placeholder='type your email' id="" required /> <br /><br />
                    <input className='w-50' type="password" name="password" placeholder='type your password' id="" required /> <br /><br />
                    {/* navigate to login */}
                    <p className='text-dark'>Already Account in Exertion? <span style={{ cursor: 'pointer' }} className='text-danger' onClick={handleNavigate}  > Login </span> </p>

                    {/* check box field */}
                    <input onClick={() => setAgree(!agree)} type="checkbox" name="" id="" />
                    <span style={{ marginLeft: '5px' }} className={`ps-2 ${agree ? 'text-primary' : 'text-danger'}`}>Accept EXertion Termse and Condition</span>

                    <Button disabled={!agree} className='d-block mx-auto mt-3' variant="primary" type="submit">
                        Register
                    </Button>

                </form>
            </div>

        </div>
    );
};

export default Register;