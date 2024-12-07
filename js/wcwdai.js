const customDonationAmountInput = document.getElementById('custom-donation-amount');

document.getElementById('donation-amount').addEventListener('change', (e) => {
    if (e.target.value === 'custom') {
        showCustomAmountInput();
    } else {
        hideCustomAmountInput();
    }
});

// ----- Manipulation of the DOM via JavaScript #1 -----
function showCustomAmountInput() {
    customDonationAmountInput.classList.add('shown');
}

function hideCustomAmountInput() {
    customDonationAmountInput.classList.remove('shown');
}

// ----- Manipulation of the DOM via JavaScript #2 -----
function randomiseDonationAmount() {
    // This is ran via an onclick in the #randomise-donation-amount button

    const donationAmountSelect = document.getElementById('donation-amount');

    // We have to subtract 1 to account for the 'Custom' option
    const selectOptionsAmount = donationAmountSelect.options.length;
    const randomSelectOption = Math.floor(Math.random() * selectOptionsAmount);

    if (randomSelectOption === donationAmountSelect.options.length - 1) {
        showCustomAmountInput();
        // Set value to a random number between 1 and 100
        customDonationAmountInput.value = Math.floor(Math.random() * 99) + 1;
    } else {
        hideCustomAmountInput();
    }

    donationAmountSelect.selectedIndex = randomSelectOption;
}

function handleSubmitDonationForm(event) {
    event.preventDefault();
    
    // The target is going to be the form, so we can grab any inputs
    // we need by just getting the name attribute of the input inside the form
    const inputs = event.target;
    
    const cardNumber = inputs['card-number'].value;
    if (!validateCardNumber(cardNumber)) {
        return;
    }

    console.log("Card number passed validation.");

    const expiryMonth = inputs['expiry-month'].value;
    const expiryYear = inputs['expiry-year'].value;
    if (!validateExpiryDate(expiryMonth, expiryYear)) {
        return;
    }

    console.log("Card expiry date passed validation.");

    const cvv = inputs['cvv'].value;
    if (!validateCVV(cvv)) {
        return;
    }
    console.log("CVV passed validation.");

    if (!validateDonationAmount(inputs)) {
        return;
    }
    console.log("Donation amount passed validation.");

    const email = inputs['email'].value;
    if (!validateEmail(email)) {
        return;
    }
    console.log("Email passed validation.");

    console.log("--- Form passed validation ---");

    alert('Thank you for your donation.');
}

function validateEmail(email) {
    if (email === null || email === '') {
        return alert('Please enter an email.');
    }

    const emailRegex = /[A-Za-z0-9._+-]+@[A-Za-z0-9.-]+\.[A-Za-z]+/;

    /** This regex:
    - Check for groups of uppercase and lowercase letters, numbers, dots, underscores, pluses, and dashes before the @ symbol
    - Checks for groups of uppercase and lowercase letters, numbers, dots, and dashes after the @ symbol, excluding letters that can't be used in a domain name such as underscore
    - The final part checks for a dot, and any uppercase or lowercase letters after that
    **/

    if (email.test(emailRegex)) {
        return true;
    } else {
        return alert('Please enter a valid email.')
    }
}

function validateDonationAmount(inputs) {
    if (inputs['donation-amount'].value === 'custom') {
        const customDonationAmount = inputs['custom-donation-amount'].value;

        if (customDonationAmount === '') {
            return alert('Please enter a custom donation amount or select a predefined amount.');
        }

        if (isNaN(parseInt(customDonationAmount))) {
            return alert('Please enter a valid custom donation amount.');
        }

        if (customDonationAmount < 0) {
            return alert('You can\'t un-donate money!');
        }
    }

    return true;
}

function validateCardNumber(cardNumber) {
    // Checks to make sure that the card number is not null or an empty string
    if (cardNumber === null || cardNumber === '') {
        return alert('Please enter a card number.');
    }
    
    // Remove any spaces
    cardNumber = cardNumber.replaceAll(' ', '');
    // Conver to number
    cardNumber = parseInt(cardNumber);

    // Check if card number is a number
    if (isNaN(cardNumber)) {
        return alert('Please enter a valid card number (Not a number).');
    }

    // Check to make sure card number is not a negative and a whole number 
    if (cardNumber < 0 || cardNumber % 1 != 0) {
        return alert('Please enter a valid card number (Negative or not a whole number).');
    }

    // Makes sure it is between 12 and 19 letters long 
    // https://baymard.com/checkout-usability/credit-card-patterns
    if (cardNumber.toString().length < 12 || cardNumber.toString().length > 19) {
        return alert('Please enter a valid card number (Invalid length).');
    }

    if (!isValidLuhn(cardNumber)) {
        return alert('Please enter a valid card number (Does not pass verification).');
    }

    return true;
}

function isValidLuhn(cardNumber) {
    // Luhn algorithm is used to make sure card numbers are valid
    // https://medium.com/@charithjayanetti/understanding-the-luhn-algorithm-a-step-by-step-guide-to-validating-and-verifying-numbers-8df6975df9fe

    // Convert to string, split string into array, convert each digit into a number, reverse array
    // Also, JS that uses arrays :)
    const cardNumberReversed = cardNumber.toString().split('').map(Number).reverse();

    let sum = 0;

    // We loop using `in` so we get the index instead of the value at the index, also reverse as we need to go backwards
    // as according to the article
    for (const index in cardNumberReversed.reverse()) {
        // Only do operations on every even digit

        if (index % 2 != 0) {
            // Add to sum as usual for every odd digit
            sum += parseInt(cardNumberReversed[index]);
            continue;
        }

        cardNumberReversed[index] = parseInt(cardNumberReversed[index] * 2);

        if (cardNumberReversed[index] > 9) {
            // The article says to sum the individual digits if they are greater than 9, but this is the same as
            // if we just remove 9 from them.
            cardNumberReversed[index] -= 9;
        }

        sum += cardNumberReversed[index];
        continue;
    }

    return sum % 10 == 0;
}

function validateExpiryDate(expiryMonth, expiryYear) {
    // Note that we do not need to check if the values are numbers or fall in a a range, as we know what values we put as
    // the available select options

    if (expiryMonth === null || expiryMonth === '') {
        return alert('Please enter a card expiry month.');
    }

    if (expiryYear === null || expiryYear === '') {
        return alert('Please enter a card expiry year.');
    }

    const currentDate = new Date();

    // The .getMonth() method returns the month as a number starting at 0, so we need to add 1 to get the correct month.
    const currentMonth = currentDate.getMonth() + 1;
    const currentYear = currentDate.getFullYear();

    if (expiryYear == currentYear) {
        if (expiryMonth < currentMonth) {
            return alert('Card expiry date is in the past, please enter a non-expired card.')
        }
    }

    return true;
}

function validateCVV(cvv) {
    if (cvv.toString().length !== 3) {
        return alert('Invalid CVV length.')
    }

    if (isNaN(parseInt(cvv))) {
        return alert('CVV is not a number.');
    }

    if (parseInt(cvv) % 1 !== 0) {
        return alert('CVV is not a whole number.');
    }

    return true;
}