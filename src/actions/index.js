import * as types from './types'
import * as api from '../api'
import _ from 'lodash'

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
        .then(response => {
            response.data.jogos = _.sortBy(response.data.jogos, ['nome_campeonato', 'hora'])
            dispatch(matchesReceive(response.data))
        })
        .catch(response => console.error('Request failed', response));;
