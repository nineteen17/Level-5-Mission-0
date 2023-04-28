import React from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
const navigate = useNavigate();

const handleLogin = () => {
    navigate('/home')
}


  return (
    <div className='Login' >
       <form className='Login__form'>
        <div className='Login__form__input'>
            <label htmlFor='email'>Email</label>
            <input type='email'  name='email' placeholder='Enter Email' />
        </div>
        <div className='Login__form__input'>
            <label htmlFor='password'>Password</label>
            <input type='password'  name='password' placeholder='Enter Password' />
        </div>
        <div className='Login__form__button'>
            <button type='submit' onClick={handleLogin} >Login</button>
        </div>
    </form>
    </div>
  )
}

export default Login