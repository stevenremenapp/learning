// Amazon shopping example at the very beginning

// Implement a cart feature:
// 1. Add items to cart.
// 2. Add 3% tax to item in cart.
// 3. Buy item: cart --> purchases.
// 4. Empty cart.

// Bonus:
// 1. Accept refunds.
// 2. Track user history.

const user = {
    name: 'Kim',
    active: true,
    cart: [],
    purchases: []
}

const amazonHistory = [];

// Naive way

// function purchaseItem(user, item) {
//     return Object.assign({}, user, {purchases: item});
// }

// purchaseItem(user, {name: 'laptop', price: 344});


// Refactored way

// Factory called purchaseItem that accepts data and runs it through the functions, bottom to top, to output the data we want
purchaseItem(
    emptyCart,
    buyItem,
    applyTaxToItems,
    addItemToCart
)(user, {name: 'laptop', price: 1000});

// We need a compose function
const compose = (f, g) => (...args) => f(g(...args));
function purchaseItem (...fns) {
    return fns.reduce(compose);
}

function addItemToCart(user, item) {
    amazonHistory.push(user);
    const updatedCart = user.cart.concat(item);
    return Object.assign({}, user, {cart: updatedCart});
}

function applyTaxToItems(user) {
    amazonHistory.push(user);
    const {cart} = user;
    const taxRate = 1.3;
    const updatedCart = cart.map(item => {
        return {
            name: item.name,
            price: item.price * taxRate
        }
    })
    return Object.assign({}, user, { cart: updatedCart });
}

function buyItem(user) {
    amazonHistory.push(user);
    return Object.assign({}, user, { purchases: user.cart });
}

function emptyCart(user) {
    amazonHistory.push(user);
    return Object.assign({}, user, { cart: [] });
}

function refundItem() {

}