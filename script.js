function updateClock() {
    const now = new Date();
    
    // Get hours, minutes, and seconds
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    // Get day, month, and year
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
    const year = now.getFullYear();

    // Update the clock and date elements
    document.getElementById('clock').innerHTML = `${hours}:${minutes}:${seconds}`;
    document.getElementById('date').textContent = `${day}/${month}/${year}`;
}

// Call updateClock every second
setInterval(updateClock, 1000);
// Initial call to display the clock and date immediately
updateClock();
