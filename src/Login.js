// import { Link } from "@material-ui/core";
import React, {useState} from "react";
import './Login.css';
import { Link,useNavigate } from "react-router-dom";
import {auth} from "./firebase";
import {createUserWithEmailAndPassword,signInWithEmailAndPassword} from 'firebase/auth';


function Login() {
    const navigate = useNavigate();
    const [Email, setEmail] = useState('');
    const [password, setpassword] = useState('');

    // const auth = getAuth();
    const signIn = e => {
        e.preventDefault();

        signInWithEmailAndPassword(auth,Email, password)
            .then(auth => {
                console.log(auth)
                navigate('/')
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();

        createUserWithEmailAndPassword(auth,Email, password)
            .then((auth) => {
                // it successfully created a new user with email and password
                if (auth) {
                    navigate('/')
                }
            })
            .catch(error => alert(error.message))
    }
    return (

        <div className="login">
            <Link to='/'>
                <img className="login__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"></img>
            </Link>
            <div className="login__container">
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={Email} onChange={e => setEmail(e.target.value)}></input>

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setpassword(e.target.value)}></input>
                    <button type="submit" className="Login__singinButton" onClick={signIn}>Sign In</button>
                </form>

                <p>
                    By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button onClick={register} className='login__registerButton'>Create your Amazon Account</button>
            </div>
        </div>

    )
}
export default Login;