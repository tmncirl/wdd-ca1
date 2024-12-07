function handleSubmitDonationForm(event) {
    event.preventDefault();
    
    const inputs = event.target;
    
    const cardNumber = inputs['card-number'].value;
    validateCardNumber(cardNumber);
}

function validateCardNumber(cardNumber) {
    cardNumber = cardNumber.replace(' ', '');

    if (cardNumber.length < 13 || cardNumber.length > 19) {
        // Card lengths can vary, usually 16 but can be between 13 and 19 digits
        return alert('Please enter a valid card number (Invalid length).');
    }

    cardNumber = parseInt(cardNumber);

    if (cardNumber === NaN) {
        return alert('Please enter a valid card number.');
    }

    console.log("passed validation");
    
    //TODO: https://www.geeksforgeeks.org/luhn-algorithm/
}