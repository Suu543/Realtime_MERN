import React, { useState, useEffect } from 'react';
import { auth } from "../../firebase";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

const CompleteRegistration = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    let history = useHistory();

    // This will not only run when a component mounts, but also when this value changes
    useEffect(() => {
        setEmail(window.localStorage.getItem('emailFormRegistration'));
    }, [history])

    const handleSubmit = () => {
        //
    }
    
    return (
        <div className="container p-5">
            {loading ? (<h4 className="text-danger">Loading...</h4>) : (<h4>Register</h4>)}
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