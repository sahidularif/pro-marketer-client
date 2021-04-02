import React, { useContext } from 'react';
import './Login.css';
import google from '../../images/logo/google.png';
import { Button } from 'react-bootstrap';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';


const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const handleGoogleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase
            .auth()
            .signInWithPopup(provider)
            .then(function (result) {
                const { displayName, email, photoURL } = result.user;
                const signedInUser = { name: displayName, email, picture:photoURL };
                setLoggedInUser(signedInUser);
                history.replace(from);
                console.log(result)
            })
            .catch(function (error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
            });
    };

    return (
        <div>
            <div className="login">
                <h3>Login</h3>

                <div className="signin-button">
                    <Button variant="outline-danger" className="rounded-pill" size="sm" onClick={handleGoogleSignIn}>
                        <h4><img src={google} alt="" style={{width:'40px'}}/> Continue With Google</h4>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Login;