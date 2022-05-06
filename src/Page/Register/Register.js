import React from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {

    const navigate = useNavigate()

    const handleNavigate = () => {

        navigate('/login')
    }
    return (
        <div>
            <h2>this is Register</h2>

            <div>
                <form action="">
                    <input className='w-25' type="text" name="name" placeholder='type your name' id="" required /> <br /><br />
                    <input className='w-25' type="text" name="email" placeholder='type your email' id="" required /> <br /><br />
                    <input className='w-25' type="text" name="password" placeholder='type your password' id="" required /> <br /><br />

                    <p className='text-dark'>Already Account in Exertion? <span style={{ cursor: 'pointer' }} className='text-danger' onClick={handleNavigate}  > Login </span> </p>



                </form>
            </div>

        </div>
    );
};

export default Register;