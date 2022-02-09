import { combineReducers } from "redux"
import { globalInfo } from "./globalInfoReducer"
import {  i18nReducer } from 'react-redux-i18n';

const appReducer = combineReducers({
    globalInfo: globalInfo,
    i18n: i18nReducer
 })

 export default appReducer