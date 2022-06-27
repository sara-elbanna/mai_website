export const LOGIN_USER = 'LOGIN_USER'
export const UPDATE_USER_INFO = 'UPDATE_USER_INFO'
export const LOGOUT = 'LOGOUT'

let initialState = {
    userRemoteId: null,
    loggedInUserAccessToken: null,
    isLoggedIn: false,
    loggedInUserPhoneNumber: null,
    firstName: '',
    lastName: '',
    uid:null
}

export function authInfo(state = initialState, action) {
    switch (action.type) {
        case LOGIN_USER:
            console.log('actionnnn', action.payload)
            return {
                ...state, isLoggedIn: action.payload.isLoggedIn,
                loggedInUserAccessToken: action.payload.accessToken,
                loggedInUserPhoneNumber: action.payload.phoneNumber,
                uid:action.payload.uid,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                userRemoteId: action.payload.uid
            }
        case UPDATE_USER_INFO:
            return {
                ...state, userRemoteId: action.payload.userId,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                isLoggedIn: action.payload.isLoggedIn
            }
        case LOGOUT:
            return {
                ...state, userRemoteId: null,
                firstName: '',
                lastName: '',
                isLoggedIn: false,
                loggedInUserAccessToken: null,
                loggedInUserPhoneNumber: null,
                uid:null
            }
        default:
            return state
    }
}
