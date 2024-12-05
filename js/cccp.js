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