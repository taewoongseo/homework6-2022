var video = document.querySelector("#player1")

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay = false
	video.loop = false
	console.log("The current volume is ", video.volume)
	document.querySelector("#volume").innerHTML = video.volume*100 + "%"
	video.mute = false;
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play()
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause()
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Current speed is " + video.playbackRate);
	video.playbackRate *= 0.95
	console.log("Changed speed is " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Current speed is " + video.playbackRate);
	video.playbackRate *= 1.05
	console.log("Changed speed is " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	video.currentTime += 15;
	console.log("new time is " + video.currentTime);
});


document.querySelector("#mute").addEventListener("click", function() {

	if (video.muted === true){
		document.querySelector("#mute").innerHTML = "Mute";
		video.muted = false;
		console.log("The mute value is " + video.muted);

	}
	else{
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
		console.log("The mute value is " + video.muted);


	}
});

document.querySelector("#slider").addEventListener("click", function() {
	console.log(this.value);
	document.querySelector("#volume").innerHTML = this.value + "%";
	video.volume = (this.value)*0.01;
});

document.querySelector("#vintage").addEventListener("click", function() {
	document.getElementById("player1").className = "oldSchool";
});

document.querySelector("#orig").addEventListener("click", function() {
	document.getElementById("player1").className = "video";
});







