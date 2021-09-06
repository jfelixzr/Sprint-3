import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {startLoginEmailPassword, startGoogleLogin, startFacebookLogin} from '../../actions/auth'
import {useForm} from '../../hooks/useForm'
import { Link } from 'react-router-dom'
import mLogin from '../../asset/logo.png'
import styled from 'styled-components';

const Logo = styled.img`
    border-radius: 50%;

`

const Login = () => {

   const dispatch = useDispatch();
   
   const {loading} = useSelector(state => state.ui)

    const [values, handleInputChange] = useForm({
        email: '',
        password: ''
    })
    //desestructurar 
    const { email, password } = values;

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(startLoginEmailPassword(email,password))
    }
    

    const handleGoogleLogin = () => {
        console.log('Google');
        dispatch(startGoogleLogin())
    }

    const handleFacebookLogin = () => {
        console.log('Facebook');
        dispatch(startFacebookLogin())
    }
    
    return (
        <div className="Registro py-5 container text-center">
            <Logo src={mLogin} alt="" />
            <form className="form-signin">
                <h1 className="h4 mb-3 font-weight-normal text-white">
                    Inicio de sesión
                </h1>

                <input
                    type="email"
                    name="email"
                    id="inputEmail"
                    className="form-control mt-1"
                    placeholder="Email"
                    required=""
                    value={email}
                    onChange={handleInputChange}

                />

                <input
                    type="Password"
                    id="inputPassword"
                    name="password"
                    className="form-control mt-1"
                    placeholder="Contreña"
                    required=""
                    value={password}
                    onChange={handleInputChange}

                />

                <button
                    type="submit"
                    className="btn btn-primary btn-block"
                    onClick={handleLogin}
                    disabled={loading}
                >
                    Iniciar Sesion
                </button>

                <div className="text-white p-2">
                    <p>Iniciar Sesion con:</p>

                    <div className="google-btn btn-danger"  
                         onClick={handleGoogleLogin}>
                        <div className="google-icon-wrapper"
                        
                        >
                            <img className="google-icon"
                                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                                alt="google button" />
                        </div>
                       
                            <b>Google</b>
                       
                    </div>
                </div>
                <div
                    className="google-btn btn-primary"
                        onClick={handleFacebookLogin}
                >
                    <div className="google-icon-wrapper" >
                        <img className="google-icon"
                            src="https://image.flaticon.com/icons/png/512/20/20673.png"
                            alt="facebook button" 
                            />
                    </div>
                  
                        <b>Facebook</b>
                    
                </div>

                <Link
                    to="/auth/register"
                    className="link"
                >
                    Crea una Cuenta
                </Link>
            </form>
        </div>
    )
}

export default Login