const domElements5 = {
    theCart: document.querySelector('.cart'),
    heart: document.querySelector('.heart')
}

const renderCart = (cart, butt) => {
    domElements5.theCart.innerHTML = '';
    cart.forEach(ct => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');

        const itemDetails = document.createElement('div');
        itemDetails.classList.add('item-details');

        const itemImage = document.createElement('img');
        itemImage.src = `${ct.Poster}`;
        itemImage.alt = `${ct.Title}`;

        const itemName = document.createElement('p');
        itemName.classList.add('item-title');
        itemName.textContent = ct.Title;

        itemDetails.append(itemImage);
        itemDetails.append(itemName);

        const removeItem = document.createElement('div');
        removeItem.classList.add('remove-nom');

        const remove = document.createElement('p');
        remove.classList.add('remove');
        remove.textContent = 'X';

        removeItem.append(remove);

        cartItem.append(itemDetails);
        cartItem.append(removeItem);

        removeItem.addEventListener('click', (e) => {
            let id = ct.imdbID;

            let ids, index;
            ids = cart.map(curr => {
                return curr.imdbID;
            });
            
            index = ids.indexOf(id);
            if(index !== -1) {
                cart.splice(index, 1);
            }

            if (id === ct.id) {
                butt.disabled = false;
            }

            if (cart.length < 5) {
                domElements5.heart.innerHTML = '💚';
            }
            if(cart.length === 0) {
                domElements5.heart.innerHTML = '🤍';
            }

            renderCart(cart, butt);
        });


        domElements5.theCart.append(cartItem);
    });
};

export default renderCart;