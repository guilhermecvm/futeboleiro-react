import * as types from './types'
import * as api from '../api'

export const matchesReceive = (matches) => {
    return {
        type: types.MATCHES_RECEIVE,
        matches: matches.jogos,
        date: matches.data_hoje,
        receivedAt: Date.now()
    }
}

export const getMatches = () => (dispatch, getState) =>
    api
        .getMatches()
        .then(response => dispatch(matchesReceive(response.data)))
        .catch(response => console.error('Request failed', response));;
