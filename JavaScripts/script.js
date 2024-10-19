let cartCount = 0;

function changeQuantity(id, value) {
    const input = document.getElementById(id);
    let currentValue = parseInt(input.value);
    currentValue += value;

    if (currentValue < 1) {
        currentValue = 1;
    }

    input.value = currentValue;
}

function addToCart(item, price) {
    cartCount++;
    alert(`${item} added to cart at ₹${price}/kg`);
    document.querySelector('.nav-links button').innerText = `Cart (${cartCount})`;
}
