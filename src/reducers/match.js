import * as types from '../actions/types'

const initialState = {
    matches: [],
    date: '',
    lastUpdate: Date.now()
}

const matchesReducer = function(state = initialState, action) {
    switch (action.type) {
        case types.MATCHES_RECEIVE:
            return Object.assign({}, state, {
                matches: action.matches,
                date: action.date,
                lastUpdate: action.receivedAt
            })
        default:
            return state
    }
}

export default matchesReducer
