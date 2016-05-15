import axios from 'axios'

export const getMatches = () =>
    axios
        .get('/api/temporeal/futebol/central.json')
        .then(response => response);
