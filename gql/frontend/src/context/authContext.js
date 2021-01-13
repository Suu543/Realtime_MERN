import React, { useEffect, useReducer, createContext } from 'react'
import { auth } from "../firebase";

// Reducer - Responsible for updating context
const firebaseReducer = (state, action) => {
    switch(action.type) {
        case "LOGGED_IN_USER":
            return { ...state, user: action.payload }
        default:
            return state;
    }
}

// state
const initialState = {
    user: null
}

// Create Context
const AuthContext = createContext();

// Context Provider
const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(firebaseReducer, initialState);

    // User onAuthStateChanged
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(async user => {
            if (user) {
                const idTokenResult = await user.getIdTokenResult();

                dispatch({
                    type: "LOGGED_IN_USER",
                    payload: { email: user.email, token: idTokenResult.token }
                });
            } else {
                dispatch({
                    type: 'LOGGED_IN_USER',
                    payload: null
                })
            }
        });

        // Cleanup - the purpose of return in useEffect
        // AuthState가 변한 것을 반영하기 전
        return () => unsubscribe();

    }, [])

    
    const value = { state, dispatch }
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// Export
export { AuthContext, AuthProvider }