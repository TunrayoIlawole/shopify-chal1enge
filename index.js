import getResults from './Functions/getResults';
import displayResult from './Functions/displayResult';

const domElements = {
    form: document.getElementById('form'),
    input: document.querySelector('.search'),
    results: document.querySelector('.result'),
    heart: document.querySelector('.heart'),
    cart: document.querySelector('.cart'),
    loader: document.querySelector('.loader-con')
}

const loader = `
    <div class = "loader"></div>
`;

function handleSubmit(e) {
    e.preventDefault();

    const inputValue = domElements.input.value;

    const searchQuery = inputValue.trim();

    const searchResults = domElements.results;
    searchResults.innerHTML = '';

    domElements.loader.insertAdjacentHTML('afterbegin', loader);
    try {
        const results = getResults(searchQuery);
        results.then(response => {
            const movies = response.Search;
            console.log(movies);
            const loader = document.querySelector('.loader');
            if (loader) {
                loader.parentElement.removeChild(loader);
            }
            displayResult(movies);
        })

    }
    catch (error) {
        console.log(error);
    }

}

domElements.form.addEventListener('submit', handleSubmit);

domElements.heart.addEventListener('click', () => {
    domElements.cart.classList.toggle('show');
})