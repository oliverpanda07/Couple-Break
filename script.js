let loveDate = new Date("July 6, 2024").getTime();

let x = setInterval(function() {

    let now = new Date().getTime();
    let distance = now - loveDate;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));

    document.getElementById("loveDays").innerHTML = days + " Days ❤️";

}, 1000);
