import { useTranslation } from "react-i18next";
import firebase from 'firebase/compat/app';
import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'
import { LOGIN_USER } from "../../store/reducers/authReducer";
import { useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";
import { firebaseApp } from "../../firebase";
import { useEffect } from "react";
import { collection, getDocs, query, where, getFirestore } from "firebase/firestore";
import './auth.scss'

function Signup() {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const db = getFirestore(firebaseApp);
    useEffect(() => {
        var ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(firebaseApp.auth());
        ui.start('#firebaseui-auth-container', {
            signInOptions: [
                {
                    provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
                    defaultCountry: 'EG',
                },
                // {
                //     provider: firebase.auth.FacebookAuthProvider.PROVIDER_ID,
                // }
            ],
            signInFlow: 'popup',
            callbacks: {
                signInSuccessWithAuthResult: function (authResult, redirectUrl) {
                    if (authResult.additionalUserInfo.isNewUser) {
                        // set user data in redux
                        dispatch({ type: LOGIN_USER, payload: { isLoggedIn: false, accessToken: authResult.user._delegate.accessToken, phoneNumber: authResult.user._delegate.phoneNumber, uid: authResult.user._delegate.uid } })
                        navigate('/complete_phone_signup')
                    }
                    else {
                        getDocs(query(collection(db, "users"), where("uid", "==", authResult.user._delegate.uid))).then(querySnapshot => {
                            if (querySnapshot.docs[0]) {
                                const userData = querySnapshot.docs[0].data()
                                dispatch({ type: LOGIN_USER, payload: { isLoggedIn: true, accessToken: userData.accessToken, phoneNumber: userData.phoneNumber, firstName: userData.firstName, lastName: userData.lastName, uid: userData.uid } })
                                navigate('/')
                            }
                            else {
                                dispatch({ type: LOGIN_USER, payload: { isLoggedIn: false, accessToken: authResult.user._delegate.accessToken, phoneNumber: authResult.user._delegate.phoneNumber, uid: authResult.user._delegate.uid } })
                                navigate('/complete_phone_signup')
                            }
                        })

                    }
                    return false;
                },
                uiShown: function () {
                    // The widget is rendered.
                    // Hide the loader.
                    document.getElementById('loader').style.display = 'none';
                }
            }

        });
    }, [])

    const { t } = useTranslation();
    return (
        <div className="Signup">
            <div className="form">
                <div className="logo" onClick={()=> navigate('/')}><img src="images/logo.jpg" /></div>
                {/* <h1 style={{ 'textTransform': 'capitalize' }}>{t('signup')}</h1> */}
                <div id="firebaseui-auth-container"></div>
                <div id="loader">Loading...</div>
                <h5 className="hint">{t("already have an account?")} <span onClick={() => navigate('/login')}>login</span></h5>
            </div>
        </div>
    );
}

export default Signup;