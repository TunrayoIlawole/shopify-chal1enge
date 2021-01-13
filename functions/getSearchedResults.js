import getResults from './getResults';

const domElements = {
    form: document.getElementById('form'),
    input: document.querySelector('.search'),
    results: document.querySelector('.result')
}

function handleSubmit(e) {
    e.preventDefault();

    const inputValue = domElements.input.value;

    const searchQuery = inputValue.trim();

    const searchResults = domElements.results;
    searchResults.innerHTML = '';

    try {
        const results = getResults(searchQuery);
        return results.then(response => {
            const movies = response.Search;
            return movies;
        })

    }
    catch (error) {
        console.log(error);
    }

}

domElements.form.addEventListener('submit', handleSubmit);

export default handleSubmit;