let sumAll = 0;

function addToCart(element) {
    let mainEl = element.closest('.single-item')
    let price = mainEl.querySelector('.price').innerText
    let name = mainEl.querySelector('h3').innerText
    let quantity = mainEl.querySelector('input').value
    let cartItems = document.querySelector('.cart-table')

    if(parseInt(quantity) > 0) {
        price = price.substring(1);
        let total = parseInt(price) * parseInt(quantity);

        sumAll += total;

        cartItems.innerHTML += `<tr class="cart-single-item">
                                    <td class="cart-single-item-name">${name}</th>
                                    <td>${quantity}</th>
                                    <td>€${price}</th>
                                    <td class="cart-single-item-price">€<span>${total}</span></th>
                                    <td><button onclick="removeFromCart(this)" class="remove-item">Remove</button></th>
				                </tr>`;

        document.querySelector('.total').innerHTML = `<b>Total: €${sumAll}</b>`

        element.innerText = 'Added'
        
        element.setAttribute('disabled', 'true')
    } else {
        alert('Please choose amount');
    }
}

function removeFromCart(element) {
    let mainEl = element.closest('.cart-single-item');
    let price = mainEl.querySelector('.cart-single-item-price span').innerText;
    let name = mainEl.querySelector('.cart-single-item-name').innerText;
    let items = document.querySelectorAll('.single-item');

    sumAll -= parseInt(price);
    document.querySelector('.total').innerHTML = `<b>Total: €${sumAll}</b>`

    mainEl.remove();

    items.forEach(function (item) {
        let itemName = item.querySelector('.si-content h3').innerText;
        if(itemName === name) {
            item.querySelector('.actions input').value = 0
            item.querySelector('.actions button').removeAttribute('disabled')
            item.querySelector('.actions button').innerText = 'Add'
        }
    })
}