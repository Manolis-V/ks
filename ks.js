// Set the date for the countdown (year, month, day, hour, minute, second)
const eventDate = new Date('2025-05-20T23:59:59').getTime();
const startingDate = new Date('2024-05-20T23:59:59').getTime();

// Update the countdown every 1 second
const countdownFunction = setInterval(function() {
    const now = new Date().getTime();
    const distance = eventDate - now;

    // Time calculations
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="countdown"
    document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

    const persent = (((now - startingDate) / (eventDate - startingDate))*100).toFixed(6)
    
    document.getElementById("countdown1").innerHTML =  persent + "%";

    // If the countdown is finished, write some text
    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("countdown").innerHTML = "EXPIRED";
    }
}, 1000);