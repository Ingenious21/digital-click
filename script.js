function updateClock() {
    const now = new Date();
    
    // Get hours, minutes, and seconds
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    // Get day of the week, day, month, and year
    let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let monthsOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const dayOfWeek = daysOfWeek[now.getDay()];
    const day = now.getDate();
    const month = monthsOfYear[now.getMonth()]; 
    const year = now.getFullYear();

    // Update the clock and date elements
    document.getElementById('clock').innerHTML = `${hours}:${minutes}:${seconds}`;
    document.getElementById('date').innerHTML = `${dayOfWeek}, ${day} ${month} ${year}`;
}

// Call updateClock every second
setInterval(updateClock, 1000);

// Initial call to display the clock and date immediately
updateClock();
