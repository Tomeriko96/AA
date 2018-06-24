//+ and - for when the navbar + FAQ accordions are openend and closed.
var accordions = document.getElementsByClassName("accordion");
var accordiontest = document.getElementsByClassName("accordiontest");

for (var i = 0; i < accordions.length; i++) {
	accordions[i].onclick = function() {
		this.classList.toggle('is-open');
		
		var content = this.nextElementSibling;
		if (content.style.maxHeight) {
			// accordion is currently open, so close it
			content.style.maxHeight = null;
			} else {
			// accordion is currently closed, so open it
			content.style.maxHeight = content.scrollHeight + "px";
		}
	}
}
for (var i = 0; i < accordiontest.length; i++) {
	accordiontest[i].onclick = function() {
		this.classList.toggle('is-open');
		
		var content = this.nextElementSibling;
		if (content.style.maxHeight) {
			// accordion is currently open, so close it
			content.style.maxHeight = null;
			} else {
			// accordion is currently closed, so open it
			content.style.maxHeight = content.scrollHeight + "px";
		}
	}
}