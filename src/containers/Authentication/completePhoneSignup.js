import { Button, Input } from "antd";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from 'react-redux';
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore';
import { firebaseApp } from "../../firebase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UPDATE_USER_INFO } from "../../store/reducers/authReducer";
import './auth.scss'

function CompletePhoneSignup() {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const userPhoneNumber = useSelector(redux => redux.authInfo.loggedInUserPhoneNumber)
    const userAccessToken = useSelector(redux => redux.authInfo.loggedInUserAccessToken)
    const uid = useSelector(redux => redux.authInfo.uid)
    console.log('rrrr', userPhoneNumber)
    const [firstName, setFirstName] = useState('')
    const [lastName, setlastName] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const db = getFirestore(firebaseApp);

    const onConfirmPassword = () => {
        setLoading(true)
        try {
            addDoc(collection(db, "users"), {
                firstName: firstName,
                lastName: lastName,
                password: password,
                phoneNumber: userPhoneNumber,
                accessToken: userAccessToken,
                registerMethod: 'phone',
                uid: uid
            }).then(docRef => {
                console.log("Document written with ID: ", docRef.id);
                dispatch({ type: UPDATE_USER_INFO, payload: { userRemoteId: docRef.id, firstName, lastName, isLoggedIn: true } })
                navigate('/')
            }).catch(() => {
                setLoading(false)
            });
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }
    return (
        <div className="CompletePhoneSignup">
            <div className="form">
                <div className="logo" onClick={() => navigate('/')}><img src="images/logo.jpg" /></div>
                <h1>{t("complete_signup")}</h1>
                <div className="input"><Input placeholder={t("first_name")} onChange={(e) => setFirstName(e.target.value)} /></div>
                <div className="input"><Input placeholder={t("last_name")} onChange={(e) => setlastName(e.target.value)} /></div>
                <div className="input"><Input.Password placeholder={t("input_password")} onChange={(e) => setPassword(e.target.value)} /></div>
                <Button loading={loading} onClick={onConfirmPassword}>{t("confirm")}</Button>
            </div>
        </div>
    );
}

export default CompletePhoneSignup;