

function validateFunc() {
	
	// Setting up variables to use later, returnFeed will be used to return feedback and info to user. Valid will determine whether feedback is required.
	
	var valid = true;
	var returnFeed = document.getElementById("validateFeedback");
	
	
	var climateCrisis = document.getElementById("cq-climateCrises").value;
	var priceEst = document.getElementById("cq-priceEst").value;
	var email = document.getElementById("cq-email").value;
	var tele = document.getElementById("cq-tele").value;
	
	// Check if field has text, or if its a number
	if (climateCrisis == "") {
		if (valid == false) {
			messageFeed += ", "
		}
		valid = false;
		messageFeed += "Experienced Climate Crisis";
		
	} else if (isNaN(climateCrisis.parseInt) == true) {
		if (valid == false) {
			messageFeed += ", "
		}
		valid = false;
		messageFeed += "Experienced Climate Crisis";

	}
	
	// Checks if field is a number or empty.
	if (priceEst == "") {
		if (valid == false) {
			messageFeed += ", "
		}
		valid = false;
		messageFeed += "Price Estimate/Wish";

	} else if (isNaN(priceEst.parseInt) == false) {
		if (valid == false) {
			messageFeed += ", "
		}
		valid = false
		messageFeed += "Price Estimate/Wish";
	}
}