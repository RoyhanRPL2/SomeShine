let paymentButton = document.getElementById('payment-button');
let paymentForm = document.getElementById('payment-popup');

paymentButton.addEventListener('click', function() {
    paymentForm.style.display = 'block';
});

let paymentCloseButton = document.getElementById('payment-close-button');

paymentCloseButton.addEventListener('click', function() {
    paymentForm.style.display = 'none';
});