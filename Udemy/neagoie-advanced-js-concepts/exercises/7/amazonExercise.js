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
    purchases: [],
    refunds: []
}

items = {
    1: {
        name: 'one',
        price:10.99
    },
    2: {
        name: 'two',
        price:49.99
    },
    3: {
        name: 'three',
        price: 0.99
    }
}

let addItemsToCart = () => {
    for (let key in items) {
      // console.log(items[key]);
      if (key % 2 !== 0) {
        user.cart.push(items[key]);
        for (let i = 0; i < user.cart.length; i++) {
          user.cart[i].dateAddedToCart = new Date();
        }
      }
    }
}

let addTaxToItemsInCart = () => {
  for (let i = 0; i < user.cart.length; i++) {
    // console.log(user.cart[i].price);
    user.cart[i].tax = Number((user.cart[i].price * 0.03).toFixed(2));
    user.cart[i].totalCost = user.cart[i].price + user.cart[i].tax;
  }
}

let purchaseCart = () => {
  for (let i = 0; i < user.cart.length; i++) {
    user.purchases.push(user.cart[i]);
    user.cart.splice(i, 1);
    i--;
  }
  for (let i = 0; i < user.purchases.length; i++) {
    user.purchases[i].datePurchased = new Date();
  }
}

let refundItem = () => {
  for (let i = 0; i < user.purchases.length; i++) {
    if (user.purchases[i].name === "three") {
      console.log(`You have been refunded ${user.purchases[i].totalCost}... ya welcome.`);
      user.refunds.push(user.purchases[i]);
      user.purchases.splice(i, 1);
    }
  }
  for (let i = 0; i < user.refunds.length; i++) {
    user.refunds[i].dateRefunded = new Date();
  }
}

addItemsToCart();
console.log('Cart', user.cart);
console.log('Purchases', user.purchases);
addTaxToItemsInCart();
console.log('Cart', user.cart);
console.log('Purchases', user.purchases);
purchaseCart();
console.log('Cart', user.cart);
console.log('Purchases', user.purchases);
refundItem();
console.log('Cart', user.cart);
console.log('Purchases', user.purchases);
console.log('Refunds', user.refunds);