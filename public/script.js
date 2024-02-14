const div = document.querySelector(".hamburgerAbout");
div.style.display = "none";

function navBar() {
	const div = document.querySelector(".hamburgerAbout");
	const h1 = document.querySelector(".h1");
	const Arrow = document.querySelector(".img-header2");
	const hamburger = document.querySelector(".hamburger");
		
	if (div.style.display == "none") {
		div.style.display = "inline-block";
		h1.style.display = "none";
		Arrow.style.display = "none";
		hamburger.style.opacity = "0.4";
		}else if (div.style.display = "inline-block"){
		div.style.display = "none";
		h1.style.display = "block";
		Arrow.style.display = "block";
		hamburger.style.opacity = "1";
		}
		else {
			div.style.display = "none"
		}
		 
		// if (div.style.display = "inline-block") {
		//div.style.display = "none";
		//h1.style.display = "inline-block";
		//Arrow.style.display = "inline-block";
		//Arrow.style.opacity = "1";
		//}else {
			//div.style.display = "none";
	//	}
}


