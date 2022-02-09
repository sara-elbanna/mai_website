export const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE'

let initialState = {
    language:'en'
}

export function globalInfo(state = initialState, action) {
    switch (action.type) {
        case CHANGE_LANGUAGE:
            return {
                ...state, language: action.payload
            }
        default:
            return state
    }
}
