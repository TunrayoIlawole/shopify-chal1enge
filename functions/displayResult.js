import renderCart from './renderCart';

const domElements2 = {
    results: document.querySelector('.result'),
    heart: document.querySelector('.heart'),
    banner: document.querySelector('.banner'),
    errorMsg: document.querySelector('.error')
}

let cart = [];

function displayResult(movies) {
    if (!movies) {
        domElements2.errorMsg.innerHTML = 'Something went wrong. Please try searching for a different movie.';
    }
    else {
        movies.forEach(item => {
            const resultItem = document.createElement('div');
            resultItem.classList.add('result-item');
        
            const imageDiv = document.createElement('div');
            imageDiv.classList.add('item');
            imageDiv.style.backgroundImage = `url('${item.Poster}')`;
        
            const addButton = document.createElement('button');
            addButton.type = 'submit';
            addButton.classList.add('add-cart');
            addButton.innerText = 'Nominate Movie'
        
            addButton.addEventListener('click', () => {
                domElements2.heart.innerHTML = '💚';
    
                const itemId = `${item.imdbID}`;
        
                const prevItem = cart.find(item => item.id === itemId);
        
                if(prevItem) {
                    addButton.disabled = true;
                } else {
                    if (cart.length < 5) {
                        cart.push({
                            ...item,
                            id: itemId
                        });
                    }
                    addButton.disabled = false;
                }
                if (cart.length === 5) {
                    domElements2.heart.innerHTML = '🖤';
                    domElements2.banner.classList.add('show');
                    setTimeout(() => {
                        domElements2.banner.classList.remove('show');
                    }, 3000);
                }
        
                renderCart(cart, addButton);
            });
        
            imageDiv.append(addButton);
        
            const itemDetails = document.createElement('div');
            itemDetails.classList.add('movie-details');
        
            const itemTitle = document.createElement('span');
            itemTitle.classList.add('title');
            itemTitle.innerText = item.Title;
        
            const itemYear = document.createElement('span');
            itemYear.classList.add('year');
            itemYear.innerText = item.Year;
        
            itemDetails.append(itemTitle);
            itemDetails.append(itemYear);
        
            resultItem.append(imageDiv);
            resultItem.append(itemDetails);
    
            domElements2.results.append(resultItem);
        });
    }
}

export default displayResult;