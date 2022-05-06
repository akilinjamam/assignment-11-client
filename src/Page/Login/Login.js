import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate()


    const handleNavigate = () => {
        navigate('/register')
    }


    const handleSubmit = (event) => {

        event.preventDefault();

        console.log('clicked')


    }
    return (
        <div>
            <h2>Login Pages</h2>

            <div className='border border-dark rounded p-4 w-75 mx-auto'>
                <form onSubmit={handleSubmit}>

                    <input className='w-50' type="text" name="email" placeholder='type your email' id="" required /> <br /><br />
                    <input className='w-50' type="password" name="password" placeholder='type your password' id="" required /> <br /><br />
                    {/* navigate to login */}
                    <p className='text-dark'>Are You new in Exertion? <span style={{ cursor: 'pointer' }} className='text-danger' onClick={handleNavigate}  > Register </span> </p>



                    <Button className='d-block mx-auto mt-3' variant="primary" type="submit">
                        Login
                    </Button>

                </form>
            </div>
        </div>
    );
};

export default Login;