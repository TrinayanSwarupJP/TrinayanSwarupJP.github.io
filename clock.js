// Function to update the clock
function updateClock() {
    const currentTime = new Date();
    const hours = String(currentTime.getHours()).padStart(2, '0');
    const minutes = String(currentTime.getMinutes()).padStart(2, '0');
    const seconds = String(currentTime.getSeconds()).padStart(2, '0');
    
    // Display the formatted time in the clock element
    document.getElementById('current-time').textContent = `${hours}:${minutes}:${seconds}`;
  }
  
  // Call updateClock every second
  setInterval(updateClock, 1000);
  
  // Initial call to display the time immediately
  updateClock();
  