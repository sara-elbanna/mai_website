import { combineReducers } from "redux"
import { globalInfo } from "./globalInfoReducer"
import {  i18nReducer } from 'react-redux-i18n';
import { authInfo } from "./authReducer";

const appReducer = combineReducers({
    globalInfo: globalInfo,
    i18n: i18nReducer,
    authInfo: authInfo
 })

 export default appReducer