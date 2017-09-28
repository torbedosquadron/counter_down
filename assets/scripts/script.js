var SecondsRemaining;
var IntervalHandel;
var x = document.getElementById("myAudio"); 

function tick() {
	var Days_view = document.getElementById('days_view');
	var Hours_view = document.getElementById('hours_view');
	var Minutes_view = document.getElementById('minutes_view');
	var Seconds_view = document.getElementById('seconds_view');

	
    x.play(); 
    
	var days = Math.floor(SecondsRemaining/86400); 
	var left_hours_in_seconds = SecondsRemaining - (days*86400);
	var hours = Math.floor(left_hours_in_seconds /3600);
	var left_minutes_in_seconds = left_hours_in_seconds - (hours*3600);
	var minutes = Math.floor(left_minutes_in_seconds /60);
	var left_seconds_in_seconds = left_minutes_in_seconds - (minutes*60);
	var seconds = left_seconds_in_seconds;
	if (days < 10) {
		days = "0"+days;
	}
	if (hours < 10) {
		hours = "0"+hours;
	}
	if (minutes < 10) {
		minutes = "0"+minutes;
	}
	if (seconds < 10) {
		seconds = "0"+seconds;
	}

	Days_view.innerHTML = days;
	Hours_view.innerHTML = hours;
	Minutes_view.innerHTML = minutes;
	Seconds_view.innerHTML = seconds;
	if (SecondsRemaining === 0) {
		alert("Come to our show tonight.");
		clearInterval(IntervalHandel);
	}
	SecondsRemaining--;
}
function startCountdown() {
	var estimated = 1;
	SecondsRemaining = estimated*24*60*60;
	IntervalHandel = setInterval(tick, 1000);
}

window.onload = function () {
	startCountdown();
};