// Set the date for the countdown (year, month, day, hour, minute, second)
const eventDate = new Date('2025-05-20T23:59:59').getTime();
const startingDate = new Date('2024-05-20T23:59:59').getTime();

// Update the countdown every 1 second
const countdownFunction = setInterval(function() {
    const now = new Date().getTime();
    const distance = eventDate - now;
    const distance_passed = now - startingDate;
    // Time calculations
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Time calculations for days passed
    const days_passed = Math.floor(distance_passed / (1000 * 60 * 60 * 24));
    const hours_passed = Math.floor((distance_passed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes_passed = Math.floor((distance_passed % (1000 * 60 * 60)) / (1000 * 60));
    const seconds_passed = Math.floor((distance_passed % (1000 * 60)) / 1000);

    // Display the result in the element with id="countdown"
    document.getElementById("days_left").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

    const persent = (((now - startingDate) / (eventDate - startingDate))*100).toFixed(6)
    
    document.getElementById("percentage").innerHTML =  persent + "%";

    document.getElementById("days_passed").innerHTML = days_passed + "d " + hours_passed + "h "
    + minutes_passed + "m " + seconds_passed + "s ";

    // If the countdown is finished, write some text
    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("countdown").innerHTML = "EXPIRED";
    }
}, 1000);

var theme = localStorage.getItem('theme') || 'default';
// Function to set the theme
function setTheme() {
    console.log("set theme ", theme)
    document.body.classList.remove('dark-theme');
    if (theme === 'dark') {
        // document.body.classList.remove('default-theme');
        document.body.classList.add('default-theme');
        theme = 'default'
    }else if(theme === 'default'){
        // document.body.classList.remove('dark-theme');
        document.body.classList.add('dark-theme');
        theme = 'dark'
    }
    localStorage.setItem('theme', theme); // Save preference

    const savedTheme = localStorage.getItem('theme');
    console.log("saved " + savedTheme)
}
// Function to set the theme
function set_loading_Theme(theme) {
    console.log("set theme ", theme)
    document.body.classList.remove('dark-theme');
    if (theme === 'dark') {
        document.body.classList.add('dark-theme');
    }else if(theme === 'default'){
        document.body.classList.add('default-theme');
    }
    localStorage.setItem('theme', theme); // Save preference
}
// Load the saved theme on page load
window.onload = function() {
    console.log("onload theme "+ theme)
    set_loading_Theme(theme);
};
