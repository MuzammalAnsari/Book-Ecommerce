import { auth, firestore } from 'Config/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import React, { useState, useEffect, createContext, useContext, useReducer } from 'react';

const AuthContext = createContext();
const initialState = { isAuth: false, isSuperAdmin: false, user: {} };

const reducer = (state, { type, payload }) => {
    switch (type) {
        case "SET_LOGGED_IN":
            return { isAuth: true, isSuperAdmin: payload.isSuperAdmin, user: payload.user };
        case "SET_LOGGED_OUT":
            return initialState;
        default:
            return state;
    }
};

export default function AuthContextProvider({ children }) {
    const [isAppLoading, setIsAppLoading] = useState(true);
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                readUserProfile(user);
            } else {
                setIsAppLoading(false);
            }
        });
    }, []);

    const readUserProfile = async (user) => {
        const docRef = doc(firestore, "users", user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            const userData = docSnap.data();
            const isSuperAdmin = userData.roles.includes("superAdmin");
            // console.log('isSuperAdmin', isSuperAdmin)

            dispatch({ type: "SET_LOGGED_IN", payload: { isSuperAdmin, user } });
        } else {
            console.log("User data not found");
        }
        setIsAppLoading(false);
    };

    return (
        <AuthContext.Provider value={{ isAppLoading, ...state, dispatch, readUserProfile }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuthContext = () => useContext(AuthContext);
