import axios from 'axios'

export const getMatches = () =>
    axios
        .get('/temporeal/futebol/central.json')
        .then(response => response);
