// Donations are stored outside of the donation function so it stays consistent through button presses, and it is randomised to make it seem more real.
var donations = Math.floor(Math.random() * (10000 - 5000) + 5000);

// ad array content and ad array header, strings for ads are stored in the arrays.
const aac = [];
const aah = [];

// Adding the content into the arrays seperately so it is easier to see how the ads are layed out before they are put onto the page.
// climate change lawsuit ad
aah[0] = "Have you or a loved one experienced the negative effects of climate change?";
aac[0] = "Please contact our lawyers, we are filing a class action lawsuit against the governments of every country on earth for gross negligence regarding the handling of climate issues. We will not let them ruin our planet any longer! <br>Please contact 0833920626 to file your complaint and get a big payout today!";
// solar panel ad
aah[1] = "Would you like to save energy and help the climate?";
aac[1] = "Install solar panels on your roof today! By installing solar panels on your roof you can save up to 50% on your electric bill. On average solar panels pay back their investment within 2-3 years! <br>Please contact 0836743862 to talk to one of our solar panel brokers today!";
// meat substitute ad
aah[2] = "Switch to ICantBelieveItsNotMeat today and reduce emissions!";
aac[2] = "Do you want to go vegan, but cant stand the thought of going without your favourite foods? Try ICantBelieveItsNotMeat! It tastes like meat, smells like meat, but it isnt! Switching to meat substitutes can reduce carbon emissions by up to 20%! <br>ICantBelieveItsNotMeat! now available at any supermarket near you!";
// save a species!
aah[3] = "Would you like to save a species from extinction?";
aac[3] = "By donating 5 euro or more you could help save a species from climate change induced extinction today! Many species of plants and animals around the world are struggling under the pressures of climate change. Your donation could help us house these animals and keep them safe! <br>Please see our website https://www.saveanimalsfromtheclimate.org today, and do your part!";

//this function is called at the start to call both greetingUpdate and randomAd when the page loads. Donations are loaded onto the page when the page first loads, and again when the button is clicked and value updated.
function startFunc() {
	greetingUpdate();
	randomAd();
	document.getElementById("donateNum").innerHTML = ("€" + donations + " has been donated so far!");
}

// This function checks the current hour and displays a greeting depending on what time of the day it is.
function greetingUpdate() {
	var time = new Date();
	var hours = time.getHours();
	var greetText = document.getElementById("greetingText")
	
	if (hours <= 12) {
		greetText.innerHTML = "Good morning!";
	} else if (hours > 12 && hours <= 5) {
		greetText.innerHTML = "Good evening!";
	} else if (hours > 5) {
		greetText.innerHTML = "Good afternoon!";
	}
}

// This function will choose a random string of text from an array and display it. It is activated when the page is loaded and when a button is clicked.
function randomAd() {
	var adTitle = document.getElementById("adTitle");
	var adCont = document.getElementById("adCont");
	var randomSelect = Math.floor(Math.random() * 4); // random between two values gotten from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

	adTitle.innerHTML = aah[randomSelect];
	adCont.innerHTML = aac[randomSelect];	
}

// Function handles taking input from the form, checking if its a number, rejecting it if not. It updates the donation by the amount entered. 
function donateFunc() {
	var donateNumber = document.getElementById("donation").value;
	var donateError = document.getElementById("donateError");
		
	if(isNaN(Number(donateNumber)) || donateNumber < 0) {
		donateError.innerHTML = "The donation entered is invalid";
	} else {
		donateError.innerHTML = "";
		donations = Number(donations) + Number(donateNumber);
		document.getElementById("donateNum").innerHTML = ("€" + donations + " has been donated so far!");
	}
}