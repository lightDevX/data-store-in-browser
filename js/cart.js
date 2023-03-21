
//declare add button
const addProduct = () => {
    const productName = document.getElementById('product-name');
    const productQuantity = document.getElementById('product-quantity');
    const product = productName.value;
    const quantity = productQuantity.value;
    productName.value = '';
    productQuantity.value = '';
    console.log(product, quantity);
    showProduct(product, quantity);
    saveStoreShoppingCart(product, quantity)
}

//data pass

const showProduct = (product, quantity) => {
    const ul = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerText = `${product}: ${quantity}`;
    ul.appendChild(li);
}

// data getting from local store at Web Browser

const getStoreShoppingCart = () => {
    let cart = {}
    const storeCart = localStorage.getItem('cart');
    if (storeCart) {
        cart = JSON.parse(storeCart);
    }
    return cart;
}

// data storage at local store in Web Browser

const saveStoreShoppingCart = (product, quantity) => {
    const cart = getStoreShoppingCart();
    cart[product] = quantity;
    const cartString = JSON.stringify(cart);
    localStorage.setItem('cart', cartString);
}

const displayStore = () => {
    const saveCart = getStoreShoppingCart();

    for (const product in saveCart) {
        const quantity = saveCart[product];
        showProduct(product, quantity);

    }
}

displayStore();