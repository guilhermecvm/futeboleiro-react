import axios from 'axios'

export const getMatches = () =>
    axios
        .get('/api/matches')
        .then(response => response)
