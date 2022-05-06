import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Register = () => {

    const navigate = useNavigate()

    const handleNavigate = () => {

        navigate('/login')
    }


    const [agree, setAgree] = useState(false)
    return (
        <div>
            <h2>this is Register</h2>

            <div className='border border-dark rounded p-4 w-75 mx-auto'>
                <form action="">
                    <input className='w-50' type="text" name="name" placeholder='type your name' id="" required /> <br /><br />
                    <input className='w-50' type="text" name="email" placeholder='type your email' id="" required /> <br /><br />
                    <input className='w-50' type="text" name="password" placeholder='type your password' id="" required /> <br /><br />
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