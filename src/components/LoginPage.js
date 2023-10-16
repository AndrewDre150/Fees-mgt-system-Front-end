import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import icon from './images/maklogo.png'

function LoginPage({logIn}) {
    const navigate = useNavigate();
    const [uname, setUname] = useState("");
    const [pword, setPword] = useState("");
    const [errors, setErrors] = useState(false);
    const err_msg = "please supply both a username and a password";
    
    const handleLogin = (e) => {
        e.preventDefault();
        if(uname.length === 0 || pword.length === 0){
            setErrors(true);
            return
        }
        setErrors(false);
        let formData = new FormData();
        formData.append("username",uname);
        formData.append("password",pword);
        const requestOptions = {
            method: 'POST',
            cors:"cors",
            credentials: "omit",
            body: formData
        };
        fetch(`http://127.0.0.1:8000/login`, requestOptions)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            localStorage.setItem('token', data.token);
            logIn();
            navigate("/dashboard");
            //form.reset();
        })
        .catch((err) => console.log(err));
    }

    const flexed = {
        display:"flex",
        justifyContent:"center",
        gap: 10,
        padding: 15
    }

    return (
        <div className='LoginRegisterForms'>
            <form onSubmit={handleLogin}>
                <img src={icon} />
                <h1>Sign into Fees Management</h1>
                {errors && <p style={{color:"red"}}>{err_msg}</p>}
                <div>
                    <label>Account username</label>
                    <input type='text' placeholder='username' onChange={(e)=>setUname(e.target.value)} name='uname' />
                    <label>Account password</label>
                    <input type='password' placeholder='password' onChange={(e)=>setPword(e.target.value)} name='pword' />
                    <button>login</button>
                    <div className='FormInputs'>
                        <Link style={{color:"red"}}>Forgot your password ?</Link>
                    </div>
                </div>
                <div style={flexed} className='div-new'>
                    <p>New to Fees Management</p>
                    <Link to={'/register'}>Create an Account</Link>
                </div>
                <hr />
                <div style={flexed} className='links'>
                    <Link>Terms & conditons</Link>
                    <Link>Privacy Policy</Link>
                    <Link>Security</Link>
                </div>
            </form>
        </div>
    )
}

export default LoginPage