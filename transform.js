function updateTime() {
    let now = new Date(); // Get current time
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Format time to always have two digits (e.g., 09:05:03)
    let formattedTime = 
        (hours < 10 ? "0" : "") + hours + ":" + 
        (minutes < 10 ? "0" : "") + minutes + ":" + 
        (seconds < 10 ? "0" : "") + seconds;

    document.querySelector(".nav").innerText = formattedTime; // Update div
}

// Update time every second
setInterval(updateTime, 1000);
alert("Try after some time \nnow click ok for more imformtion");
