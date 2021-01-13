import React, { useState, useContext } from 'react';
import { AuthContext } from "../../context/authContext";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { auth, googleAuthProvider } from "../../firebase"

const Login = () => {
    const { dispatch } = useContext(AuthContext);
    const [email, setEmail] = useState('jos50275266@gmail.com');
    const [password, setPassword] = useState('xxx');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    let history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await auth.signInWithEmailAndPassword(email, password)
                .then(async result => {
                    const { user } = result;
                    const idTokenResult = await user.getIdTokenResult();

                    dispatch({
                        type: "LOGGED_IN_USER",
                        payload: {
                            email: user.email,
                            token: idTokenResult.token
                        }
                    });

                    // Send user info to our server mongodb to either update/create

                    history.push('/');
                });
        } catch(error) {
            console.log('Login Error', error);
            toast.error(error.message);
            setLoading(false);
        }

    }

    return (
        <div className="container p-5">
                <h4>Login</h4>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Email Address</label>
                        <input 
                            className="form-control" 
                            type="email" 
                            value={email} 
                            placeholder="Enter Email"
                            onChange={(e) => setEmail(e.target.value)} 
                            disabled={loading}
                        />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input 
                            className="form-control" 
                            type="password" 
                            value={password} 
                            placeholder="Enter Password"
                            onChange={(e) => setPassword(e.target.value)} 
                            disabled={loading}
                        />
                    </div>
                    <button className="btn btn-raised btn-primary" disabled={!email || !password || loading}>Submit</button>
                </form>
        </div>
    )
}

export default Login;