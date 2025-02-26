// Get the current time and update the display
function updateTime() {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();
    const timeString = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    document.getElementById('time').innerText = timeString;
}

// Set the alarm time and update the display
function setAlarmTime() {
    const alarmInput = document.getElementById('alarm-input');
    const alarmTime = alarmInput.value;
    document.getElementById('alarm-time').innerText = `Alarm set for: ${alarmTime}`;
}

// Check if the current time matches the alarm time
function checkAlarm() {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const alarmInput = document.getElementById('alarm-input');
    const alarmTime = alarmInput.value.split(':');
    if (hours === parseInt(alarmTime[0]) && minutes === parseInt(alarmTime[1])) {
        // Play the alarm sound
        const alarmSound = document.getElementById('alarm-sound');
        alarmSound.play();
        // Enable the stop alarm button
        document.getElementById('stop-alarm-btn').disabled = false;
    }
}

// Stop the alarm sound
function stopAlarm() {
    const alarmSound = document.getElementById('alarm-sound');
    alarmSound.pause();
    alarmSound.currentTime = 0;
    alarmSound.load(); // Add this line to stop the alarm sound
    // Disable the stop alarm button
    document.getElementById('stop-alarm-btn').disabled = true;
}

// Set up event listeners
document.getElementById('set-alarm-btn').addEventListener('click', setAlarmTime);
document.getElementById('stop-alarm-btn').addEventListener('click', stopAlarm);

// Update the time display every second
setInterval(updateTime, 1000);

// Check for alarm every second
setInterval(checkAlarm, 1000);