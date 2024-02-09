// Add your JavaScript code here
let noClicks = 0; // Variable to track the number of clicks on the "No" button

document.getElementById('valentineForm').addEventListener('click', function(event) {
    const answer = event.target.value; // Get the value of the clicked button

    if (answer === 'yes') {
        window.location.href = 'https://music.youtube.com/playlist?list=PLfGZOBHqlm7GTRaFAxDKqtW4R14nwT4Py&si=fNLT1UWo6V5qCmzh'; // Redirect to Spotify playlist
    } else if (answer === 'no') {
        noClicks++; // Increment the number of clicks on the "No" button
        const yesLabel = document.getElementById('yesLabel'); // Get the "Yes" label element
        const yesEmoji = document.getElementById('yesEmoji'); // Get the emoji element

        if (noClicks <= 10) {
            // Increase the font size of the "Yes" text and the emoji based on the number of clicks on the "No" button
            yesLabel.style.fontSize = `${16 + noClicks}px`; // Increase font size for "Yes" text
            yesEmoji.style.fontSize = `${16 + noClicks}px`; // Increase font size for emoji
        } else {
            // Display message when more than 5 clicks on the "No" button
            document.getElementById('no').nextElementSibling.textContent = "I'm Actually heartbroken, but I understand.If you still want to change your decision,the options still work";
        }
    }
});
