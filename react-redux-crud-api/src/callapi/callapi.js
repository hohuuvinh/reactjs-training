import axios from 'axios';

export default function callApi(endpoint, method = 'GET', body) {
    return axios({
        method: method,
        url: `https://5f702030bdb178001633bd23.mockapi.io/api/${endpoint}`,
        data: body
    }).catch(err => {
        console.log(err);
    });
}