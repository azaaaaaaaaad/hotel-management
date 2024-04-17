import { createContext, useEffect, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../Firebase/firebase.config";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const AuthContext = createContext(null);
const auth = getAuth(app);

//social auth provider
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProviders = ({ children }) => {

    const [user, setUser] = useState(null);
    console.log(user);
    const [loading, setLoading] = useState(true);

    //create user
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //update user profile
    const updateUserProfile = (name, image) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: image,
        })
    }

    //user sign in
    const signInUser = (email, password) => {
        setLoading(true)
        // toast.success('login successful')
        return signInWithEmailAndPassword(auth, email, password)
    }

    //google login
    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    //github login
    const githubLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }

    //user logout
    const logOut = () => {
        setUser(null)
        return signOut(auth);
    }

    //observer
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                setLoading(false)
            }
        });
        return () => unSubscribe
    }, [loading])

    const authInfo = {
        user,
        createUser,
        logOut,
        signInUser,
        loading,
        googleLogin,
        githubLogin,
        updateUserProfile,
        setLoading,

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
            <ToastContainer
                position="top-center"
                autoClose={5000}></ToastContainer>
        </AuthContext.Provider>

    );
};

export default AuthProviders;