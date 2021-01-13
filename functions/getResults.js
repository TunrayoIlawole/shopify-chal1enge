import makeRequest from './api';

function getResults(searchQuery) {
    return makeRequest.get('', {
        params: {
            s: searchQuery,
            y: 'Yes'
        }
    })
    .then(response => {
        return response.data;
    })
}

export default getResults;