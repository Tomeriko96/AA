(function() {

	var preload = document.getElementById("preload");
	var loading = 0;
	var id = setInterval(frame, 48);
	//Redirects User to the Home page of the website when loading reaches 30.
	function frame() {
		if(loading == 30) {
			clearInterval(id);
			window.open("index.html", "_self");
		} else {
			loading = loading + 1;
			if(loading == 20) {
				//Redirecting starts when loading reaches 20 by slowly fading out.
				preload.style.animation = "fadeout 1s ease";
			}
		}
	}
})();
