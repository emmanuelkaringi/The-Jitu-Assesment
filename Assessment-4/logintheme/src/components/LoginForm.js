import React, {useContext, useState} from 'react'
import { ThemeContext } from '../context/Theme';

const LoginForm = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { toggleTheme } = useContext(ThemeContext);
    // const [passwordError, setPasswordError] = useState('');

    function handlesubmit(e) {
        e.preventDefault();
        // const emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        // const passwordPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

        if (!email || !password) {
            alert("Please fill all the fields")
        } else {
            alert("Your email is " + email)
        }

        // if (!passwordPattern.test(password) || emailPattern.test(email)) {
        //     setPasswordError("Password should have a minimum length of 6 characters, contain at least one digit, and include at least one special character");
        //     return;
        // }
        // alert("The email address is " + email);
    }

  return (
    <div>
        <div className="theme_icon">
        <i className="fa-sharp fa-solid fa-sun" onClick={toggleTheme}></i>
        </div>
        <form onSubmit={handlesubmit} autoComplete="off">
            <h1>Login</h1>
            <div className="formInput">
                <label>Email</label>
                <input type="email" name="email" value={email} placeholder="Enter your email" onChange={(e)=> setEmail(e.target.value)}></input>
                <label>Password</label>
                <input type='password' name='password' value={password} placeholder='Enter a valid password' onChange={(e)=> setPassword(e.target.value)} ></input>
            </div>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default LoginForm