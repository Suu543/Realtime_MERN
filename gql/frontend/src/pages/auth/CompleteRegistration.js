import React, { useState, useEffect, useContext } from 'react';
import { auth } from "../../firebase";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../context/authContext";

const CompleteRegistration = () => {

    const { dispatch } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    let history = useHistory();

    // This will not only run when a component mounts, but also when this value changes
    useEffect(() => {
        setEmail(window.localStorage.getItem('emailFormRegistration'));
    }, [history])

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        // Validation
        if (!email || !password) {
            toast.error('Email and Password is required...');
            return;
        }

        try {
            const result = await auth.signInWithEmailLink(email, window.location.href);
            console.log('result', result);
            if (result.user.emailVerified) {
                // Remove Email from LocalStorage
                window.localStorage.removeItem('emailForRegistration');
                let user = auth.currentUser;
                await user.updatePassword(password);

                // Dispatch user with token and email
                // then redirect
                const idTokenResult = await user.getIdTokenResult();
                dispatch({
                    type: "LOGGED_IN_USER",
                    payload: {
                        email: user.email,
                        token: idTokenResult.token
                    }
                });
                // Make API Request to save/update user in MongoDB

                // Redirect user
                history.push('/');
            }

        } catch (error) {
            console.log('Register Complete Error', error.message);
            setLoading(false);
            toast.error(error.message);
        }
    }
    
    return (
        <div className="container p-5">
            {loading ? (<h4 className="text-danger">Loading...</h4>) : (<h4>Complete Your Registration</h4>)}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Email Address</label>
                    <input 
                        className="form-control" 
                        type="email" 
                        value={email} 
                        placeholder="Enter Email"
                        onChange={(e) => setEmail(e.target.value)} 
                        disabled
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
                <button className="btn btn-raised btn-primary" disabled={!email || loading}>Submit</button>
            </form>
        </div>
    )
}

export default CompleteRegistration;