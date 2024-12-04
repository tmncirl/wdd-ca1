
// Function for validating form responses and saying which fields are invalid.
function validateFunc() {
	
	// Setting up variables to use later, returnFeed will be used to return feedback and info to user. Valid will determine whether feedback is required.
	
	var valid = true;
	var returnFeed = document.getElementById("validateFeedback");
	
	var climateCrisis = document.getElementById("cq-climateCrisis").value;
	var priceEst = document.getElementById("cq-priceEst").value;
	var email = document.getElementById("cq-email").value;
	var tele = document.getElementById("cq-tele").value;
	var messageFeed = "The following fields are invalid: ";
	
	// Check if field has text, or if its a number
	if (climateCrisis == "") {
		valid = false;
		messageFeed += "Experienced Climate Crisis";
	} 
	
	// Checks if field is a number or empty.
	if (priceEst == "") {
		if (valid == false) {
			messageFeed += ", ";
		}
		valid = false;
		messageFeed += "Price Estimate/Wish";
		

	} else if (isNaN(Number(priceEst))) {
		if (valid == false) {
			messageFeed += ", ";
		}
		valid = false;
		messageFeed += "Price Estimate/Wish";
	}
	
	// Checks if field has an @ symbol or if its empty
	if (email == "") {
		if (valid == false) {
			messageFeed += ", ";
		}
		valid = false;
		messageFeed += "Email";
	
	} else if (email.includes("@") == false) {
		if (valid == false) {
			messageFeed += ", ";
		}
		valid = false;
		messageFeed += "Email";
		
	}
	
	// Checks if field is a empty or a number, and if its over 999999999 as phone numbers are at least 10 digits long
	if (tele == "") {
		if (valid == false) {
			messageFeed += ", ";
		}
		valid = false;
		messageFeed += "Phone Number";
	} else if (isNaN(Number(tele))) {
		if (valid == false) {
			messageFeed += ", ";
		}
		valid = false;
		messageFeed += "Phone Number";
	} else if (tele < 99999999) {
		if (valid == false) {
			messageFeed += ", ";
		}
		valid = false;
		messageFeed += "Phone Number";
	}
		
	if(valid == false) {
		returnFeed.innerHTML = messageFeed;
	} else {
		returnFeed.innerHTML = "Your request has been sent! Please allow up to 5 business days to recieve a response";
	}
}

// Functions for showing or hiding the effects of climate change, it can hide or show any variable as ID is passed onto it.
function displayToggle(inputID) {
	var showHide = document.getElementById(inputID)
	// If element is not displayed, display. Otherwise, set to not display.
	if (showHide.style.display == "inline") {
		showHide.style.display="none";
	} else {
		showHide.style.display="inline";
	}
}

