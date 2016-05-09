import * as types from './types'
import axios from 'axios'

export const matchesReceive = (matches) => {
    return {
        type: types.MATCHES_RECEIVE,
        matches: matches.jogos,
        date: matches.data_hoje,
        receivedAt: Date.now()
    }
}

export function getMatches() {
    return (dispatch, getState) => {
        var data = {
            data_hoje: '09/05/2016',
            jogos: [
                {
                    time_casa: {
                        nome: 'Botafogo',
                        placar: 1
                    },
                    time_visitante: {
                        nome: 'Flamengo',
                        placar: 0
                    }
                }
            ]
        };
        return axios
            .get('/temporeal/futebol/central.json')
            .then(response => {
                dispatch(matchesReceive(data));
                // dispatch(matchesReceive(response.data));
                return response;
            });
    }
}
