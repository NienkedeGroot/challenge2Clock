const deg = 6;
const hr = document.querySelector("#hr");
const mn = document.querySelector("#mn");
const sc = document.querySelector("#sc");

setInterval(() => {
	let day = new Date();
	let hh = day.getHours() * 30;
	let mm = day.getMinutes() * deg;
	let ss = day.getSeconds() * deg;
	hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
	mn.style.transform = `rotateZ(${mm}deg)`;
	sc.style.transform = `rotateZ(${ss}deg)`;
	
})


function updateBackground() {
	var hr = (new Date()).getHours();
	var	body = document.body;
	var	bStyle = body.style;
	var	hello = document.querySelector(".hello");
	var zon = document.getElementById('zonAnimation');

	if (hr < 10) {
		bStyle.backgroundColor = "#294E84";
		bStyle.color = "black";
		hello.innerText = "Goedemorgen";
		// zon.style.animationPlayState = 'running';

	}	else if (hr <20) {
			bStyle.backgroundColor = "#71AACD";
			bStyle.color = "white";
			hello.innerText = "Fijne dag";
			// zon.style.animationPlayState = 'pauzed';

		}	else {
				bStyle.backgroundColor = "#0E1747";
				bStyle.color = "white";
				hello.innerText = "Fijne avond";
				// zon.style.animationPlayState = 'running';	
			}
	
}

setInterval(updateBackground, 1000 * 60);
updateBackground();