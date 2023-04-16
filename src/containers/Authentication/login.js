import { Alert, Button, Form, Input } from "antd";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from 'react-redux';
import { getFirestore, collection, getDocs, addDoc, query, where } from 'firebase/firestore';
import { firebaseApp } from "../../firebase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import './auth.scss'
import { LOGIN_USER } from "../../store/reducers/authReducer";

function Login() {
    const { t } = useTranslation();
    const dispatch = useDispatch()
    const [password, setPassword] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const navigate = useNavigate();
    const db = getFirestore(firebaseApp);

    const onLogin = (e) => {
        e.preventDefault()
        setLoading(true)
        getDocs(query(collection(db, "users"), where("phoneNumber", "==", phoneNumber))).then(querySnapshot => {
            if (querySnapshot.docs[0]) {
                const userData = querySnapshot.docs[0].data()
                console.log('dddddd', userData)
                if (userData.password == password) {
                    //set logged in user, redirect to home page
                    dispatch({ type: LOGIN_USER, payload: { isLoggedIn: true, accessToken: userData.accessToken, phoneNumber: userData.phoneNumber, firstName: userData.firstName, lastName: userData.lastName, uid: userData.uid } })
                    navigate('/')
                }
                else {
                    setError('incorrect_password')
                }
            }
            else {
                setError('phone_not_registered')
            }

        }).finally(() => {
            setLoading(false)
        })

    }
    return (
        <div className="Login">
            <div className="back" onClick={()=>navigate('/')}>
                <i style={{cursor:'pointer'}} className="fa-solid fa-arrow-left"></i>
                <p style={{marginLeft:10, cursor:'pointer'}}>Home</p>
            </div>
            <Form className="form">
                <div className="logo" onClick={()=> navigate('/')}><img src="images/logo.jpg" /></div>
                <h1>{t("login")}</h1>
                <h4 className="label">{t('phone_number')}</h4>
                <div className="input">
                    {/* <Input autoComplete="off" placeholder={t("phone_number")} onChange={(e) => setPhoneNumber(e.target.value)} /> */}
                    <PhoneInput
                        defaultCountry="EG"
                        placeholder={t("phone_number")}
                        value={phoneNumber}
                        onChange={setPhoneNumber} />
                </div>
                <h4 className="label">{t('password')}</h4>
                <div className="input"><Input.Password placeholder={t("input_password")} onChange={(e) => setPassword(e.target.value)} /></div>
                <Button disabled={!password || !phoneNumber} htmlType="submit" loading={loading} onClick={onLogin}>{t("login")}</Button>
                <h5 className="hint">{t("don't have an account?")} <span onClick={() => navigate('/signup')}>{t('signup')}</span></h5>
                {error && <Alert
                    description={t(error)}
                    type="error"
                />}
            </Form>
        </div>
    );
}

export default Login;