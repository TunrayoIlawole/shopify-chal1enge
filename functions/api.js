const apiKey = 'e262c8da';

const makeRequest = axios.create({
    baseURL: 'https://www.omdbapi.com/',
    params: {
        apikey: apiKey
    }
});

export default makeRequest;