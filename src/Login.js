import React, {useState} from 'react';
import "./Login.css";
import {Link, useHistory} from  "react-router-dom";
import {auth} from "./Firebase";


function Login() {
    const history = useHistory();
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    

    const login = event => {
        event.preventDefault(); //this stops the refresh
        auth.signInWithEmailAndPassword(email,password)
        .then((auth) => {

            history.push("/");

        })
        .catch((e) => alert(e.message));

    };

    const register = event => {
        event.preventDefault(); //this stops the refresh
        auth.createUserWithEmailAndPassword(email,password)
        .then((auth) => {
            history.push("/");

        })
        .catch((e) => alert(e.message));
    };
    
    
    return (
        <div className="login">
            <Link to="/">
            <img  className="loginLogo" src="https://pngimg.com/uploads/amazon/amazon_PNG21.png" alt=""/>
        </Link>
        <div className="loginContainer">
<h1>Sign In</h1>
<form>
<h5>Email</h5>
<input value={email} onChange={event => setEmail(event.target.value)} type="email"/>
<h5>Password</h5>
<input value={password} onChange={event => setPassword(event.target.value)} type="password"/>
<button onClick={login} type="submit" className="signinButton">Sign In</button>
</form>

<button onClick={register} className="registerButton">Create your Amazon Account</button>

        </div>
        </div>
    )
}

export default Login
