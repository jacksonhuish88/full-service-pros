// starFill.js
function fillStars() {
    const starDiv = document.querySelector('.star-rating div');
    let fillPercentage = 0;
    const interval = setInterval(() => {
        if (fillPercentage <= 100) {
            starDiv.style.setProperty('--fill', `${fillPercentage}%`);
            fillPercentage++;  // Increase fill by 1% each interval
        } else {
            clearInterval(interval);  // Stop the interval when 100% is reached
        }
    }, 10);  // Update the fill every 100 milliseconds
}

// Start filling stars once the document is fully loaded
document.addEventListener('DOMContentLoaded', fillStars);
