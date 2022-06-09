import { useState } from 'react';
import { useUserContext } from '../../context/UserContext';
import { useNavigate } from "react-router-dom";
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [ user, setUser ] = useState('');
  const [ pass, setPass ] = useState('');
  const { login } = useUserContext();

    const handleLogin = (event) => {
      event.preventDefault();
      console.log(user)
      const data = {
        user,
        pass
      }

      login(data);

      navigate('/');
    } 

    return (
        <div className='LoginContainer'>
          <h1>Login</h1>
          <form onSubmit={handleLogin} className='LoginForm'>
            <label className='LabelLogin'>
                Usuario
              <input
                className='InputLogin'
                type='text'
                value={user}
                onChange={({target}) => setUser(target.value)}
              />
            </label>
            <label className='LabelLogin'>
                Contraseña
              <input
                className='InputLogin'
                type='password'
                value={pass}
                onChange={({target}) => setPass(target.value)}
              />
            </label>
            <div className='LabelLogin'>
                <button type='submit' className='Option'>Login</button>
            </div>
          </form>
        </div>
      )
  }

export default Login