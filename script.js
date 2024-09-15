let cartCount = 0;
let cartItems = [];
function addToCart(productName, price) {
    cartCount++;
    cartItems.push({ productName, price });
    alert(productName + " added to cart!");
    document.querySelector('.cart a').textContent = `Cart (${cartCount})`;
    updateCart();
}
function updateCart() {
    let cartDetails = "Cart Details:\n\n";
    cartItems.forEach((item, index) => {
        cartDetails += `${index + 1}. ${item.productName} - ₹${item.price}\n`;
    });
    console.log(cartDetails);
}
let orderCount = 0;  
let orderItems = [];  
function addToOrder(productName, price) {
    orderCount++;
    orderItems.push({ productName, price });
    alert(productName + " added to your orders!");
    document.querySelector('.order a').textContent = `Orders (${orderCount})`;
    updateOrder();
}
function updateOrder() {
    let orderDetails = "Order Details:\n\n";
    orderItems.forEach((item, index) => {
        orderDetails += `${index + 1}. ${item.productName} - ₹${item.price}\n`;
    });
    console.log(orderDetails);
}