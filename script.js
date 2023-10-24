document.getElementById('payment-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const amount = document.getElementById('amount').value;
    const cardNumber = document.getElementById('card-number').value;
    const expiryDate = document.getElementById('expiry-date').value;
    const cvv = document.getElementById('cvv').value;

    // Simulate payment processing (replace with actual payment processing logic).
    const success = Math.random() < 0.8; // 80% success rate

    // Simulated transaction ID (replace with a real transaction ID).
    const transactionId = Math.floor(Math.random() * 1000000);

    const paymentResponse = document.getElementById('payment-response');
    const paymentMessage = document.getElementById('payment-message');
    const transactionIdElement = document.getElementById('transaction-id');

    if (success) {
        paymentMessage.textContent = 'Payment Successful!';
        paymentMessage.style.color = 'green';
        transactionIdElement.textContent = `Transaction ID: ${transactionId}`;
    } else {
        paymentMessage.textContent = 'Payment Failed. Please try again.';
        paymentMessage.style.color = 'red';
        transactionIdElement.textContent = '';
    }

    paymentResponse.classList.remove('hidden');
});

// Additional JavaScript code for styling purposes or animations can be added here.
